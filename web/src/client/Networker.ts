import jwtDecode from 'jwt-decode'
import {API_VERSION, APP_TOKEN_KEY, APP_REFRESH_TOKEN_KEY} from '../client/utils/constants'
import axios, {AxiosRequestConfig} from 'axios'
import {RouterProps} from 'react-router'
import {store} from '../client/client'
import {addFailureNotification} from '../client/modules/notificationSystem/ducks/notificationSystemDuck'
import handleBadSession from '../client/hooks/handleBadSession'

const {CancelToken} = axios

interface Config extends AxiosRequestConfig {
  contentType?: string
}

class Networker {
  userId: string | null = null
  accessToken: string | null = null
  refreshToken: string | null = null
  accessObj: object | null = null
  refreshObj: object | null = null
  response: object | undefined
  error: object | undefined
  router: RouterProps['history'] | null = null

  setAccessToken = (accessToken: string | null) => {
    this.accessToken = accessToken
    if (!accessToken) {
      this.accessObj = null
      window.localStorage.removeItem(APP_TOKEN_KEY)
      return
    }

    this.accessObj = jwtDecode(accessToken)
    if (!this.accessObj) return
    const {exp, user_id: userId} = this.accessObj as any
    if (exp < Date.now() / 1000) {
      //this.accessObj = null
      //this.accessToken = null
      //window.localStorage.removeItem(APP_TOKEN_KEY)
    } else {
      this.userId = userId
      window.localStorage.setItem(APP_TOKEN_KEY, accessToken)
    }
  }

  setRefreshToken = (refreshToken: string | null) => {
    this.refreshToken = refreshToken
    if (!refreshToken) {
      this.refreshObj = null
      window.localStorage.removeItem(APP_REFRESH_TOKEN_KEY)
      return
    }

    this.refreshObj = jwtDecode(refreshToken)
    // if (!this.accessObj) return
    const {exp} = this.refreshObj as any
    if (exp < Date.now() / 1000) {
      this.refreshObj = null
      this.refreshToken = null
      window.localStorage.removeItem(APP_REFRESH_TOKEN_KEY)
    } else {
      window.localStorage.setItem(APP_REFRESH_TOKEN_KEY, refreshToken)
    }
  }

  getAccessToken = (window: Window) => {
    if (!window) return
    const accessToken = window.localStorage.getItem(APP_TOKEN_KEY)
    this.setAccessToken(accessToken)
  }

  getRefreshToken = (window: Window) => {
    if (!window) return
    const refreshToken = window.localStorage.getItem(APP_REFRESH_TOKEN_KEY)
    this.setRefreshToken(refreshToken)
  }

  logErrors = (response) => {
    const {errors = []} = response
    if (Array.isArray(errors) && errors.length > 0) {
      console.error(JSON.stringify(errors))
    }
  }

  notifyErrors = (response) => {
    const {errors = []} = response
    if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((error) => store.dispatch(addFailureNotification(error.message)))
    }
  }

  httpHandler = async (url: string, config: Config, handle404s = true) => {
    const {
      method = 'GET',
      data,
      contentType,
      params,
      paramsSerializer,
      onUploadProgress,
      responseType
    } = config

    const nullResponse = {
      errors: undefined,
      data: undefined
    }

    const standardError = [{message: 'Your session has expired'}]

    const invalidSessionResponse = {
      errors: standardError,
      data: undefined
    }

    const serverErrorResponse = {
      data: undefined,
      errors: [{message: 'Something went wrong! Please try again later.'}]
    }

    const source = CancelToken.source()

    const {exp: accessExp}: any = this.accessObj || {}
    const {exp: refreshExp}: any = this.refreshObj || {}
    const accessTokenExpired = accessExp < Date.now() / 1000
    const expiredRefreshToken = refreshExp < Date.now() / 1000
    let newAccessToken = false

    if (accessTokenExpired && !expiredRefreshToken && !url.startsWith('/users/token')) {
      await axios(`${__APP_URL__}/${API_VERSION}/users/token/refresh`, {
        method: 'POST',
        data: {refresh: this.refreshToken}
      })
        .then((res) => {
          newAccessToken = true
          this.setAccessToken(res.data.access)
        })
        .catch((error) => {
          console.error(`Refresh failed: response data: ${JSON.stringify(error?.response?.data)}`)
          handleBadSession(standardError, this.router?.history)
        })
    } else if (accessTokenExpired && expiredRefreshToken) {
      if (!url.startsWith('/users/token')) {
        handleBadSession(standardError, this.router?.history)
        return invalidSessionResponse
      }
    } else if (expiredRefreshToken) {
      if (!url.startsWith('/users/token')) {
        handleBadSession(standardError, this.router?.history)
        return invalidSessionResponse
      }
    }

    if (
      (!accessTokenExpired && !expiredRefreshToken) ||
      url.startsWith('/users/token') ||
      newAccessToken
    ) {
      const res = await axios(`${__APP_URL__}/${API_VERSION}${url}`, {
        method: method || 'GET',
        data,
        params,
        paramsSerializer,
        headers: {
          Authorization: this.accessToken ? `Bearer ${this.accessToken}` : '',
          'content-type': contentType || 'application/json'
        },
        onUploadProgress,
        cancelToken: source.token,
        responseType
      })
        .then((res) => {
          const resHeaders = res.headers['content-type'] || ''
          if (
            resHeaders.toLowerCase().startsWith('application/json') ||
            resHeaders.toLowerCase().startsWith('text/csv')
          ) {
            return {
              data: res.data,
              errors: undefined
            }
          } else {
            return nullResponse
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            return {
              data: undefined,
              errors: [{message: error.message}]
            }
          } else if (!error.response) {
            // i.e. no network response.
            // do not want to kick the user out.
            return serverErrorResponse
          } else {
            if (error.response.status === 404 || error.response.status === 403) {
              // redirect non permission users and not found routes to /queues
              if (!handle404s && error.response.status === 404) {
                return {
                  data: undefined,
                  errors: [{message: error.message}]
                }
              }
              if (this.userId) {
                this.router?.history.push('/queues')
              } else {
                handleBadSession(error?.response?.data?.errors, this.router?.history)
                return {
                  data: undefined,
                  errors: error?.response?.data?.errors
                }
              }
            }
            if (error.response.status === 401) {
              handleBadSession(error?.response?.data?.errors, this.router?.history)
              return {
                data: undefined,
                errors: error?.response?.data?.errors
              }
            } else if (error.response.status === 500) {
              if (this.userId) {
                this.router?.history.push('/queues')
              } else {
                this.router?.history.push('/')
              }
              return serverErrorResponse
            } else {
              return {
                data: undefined,
                errors: error?.response?.data?.errors
              }
            }
          }
        })
      this.logErrors(res)
      this.notifyErrors(res)
      return res
    }
  }
}

export default Networker
