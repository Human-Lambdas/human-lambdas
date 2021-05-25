import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {connect} from 'react-redux'
import {GOOGLE_AUTH_ID} from 'client/utils/constants'
import {segmentTrack} from 'client/utils/segmentIo'
import jwtDecode from 'jwt-decode'
import {GoogleLogin} from 'react-google-login'
import useRouter from 'client/hooks/useRouter'
import useNetworker from 'client/hooks/useNetworker'
import {AxiosRequestConfig} from 'axios'
import qs from 'qs'
import Spinner from 'client/components/Spinner'

interface GoogleAuthButtonProps {
  dispatch: any
  label: string
}

const StyledGoogleLoginButton = styled(GoogleLogin)`
  justify-content: center;
  border: 1px solid #6648ee !important;
  box-shadow: none !important;
  border-radius: 4px !important;
  width: 100%;
  &:focus {
    outline: none;
  }
  div {
    margin-right: 0 !important;
    padding: 0 10px 0 0 !important;
  }
  span {
    font-family: Lambdas, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    font-weight: 500 !important;
    font-size: 15px !important;
    color: #6648ee !important;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 41px;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: center;
`

const GoogleAuthButton = (props: GoogleAuthButtonProps) => {
  const {history} = useRouter() as any
  const networker = useNetworker()
  const {dispatch, label} = props
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    location: {search}
  } = history
  const params = qs.parse(search.slice(search.lastIndexOf('?') + 1))
  const template_id = params?.template_id ? Number(params.template_id) : undefined

  const logInIfNoError = async (data, login_type) => {
    const {access, refresh} = data || {}

    if (access && refresh) {
      networker.setAccessToken(access)
      networker.setRefreshToken(refresh)
      const {user_id, name, email} = jwtDecode(access)
      const {
        data: {current_organization_id}
      } = await networker.httpHandler(`/users/${user_id}`, {method: 'GET'})

      // segment track
      segmentTrack('Logged In', {
        orgId: current_organization_id,
        fullName: name,
        userId: user_id,
        email,
        login_type
      })

      history.push(`/queues`)
    }
  }

  const checkIfErrorIsForNonExistingUser = (errors) => {
    return (
      Array.isArray(errors) &&
      errors.length === 1 &&
      errors[0].message &&
      errors[0].message.indexOf('no user exists for') === 0
    )
  }

  const fetchToken = async (tokenId) => {
    const reqBody = {
      method: 'POST',
      data: {
        token: tokenId
      }
    } as AxiosRequestConfig
    networker?.getAccessToken(window)
    networker?.getRefreshToken(window)
    const {data, errors} = await networker.httpHandler('/users/token/google', reqBody)

    return {data, errors}
  }

  const handleResponseFromGoogle = useCallback(
    async (response) => {
      setIsSubmitting(true)
      const {accessToken, tokenId, profileObj} = response
      const {name, email} = profileObj || {}

      if (accessToken && tokenId && name && email) {
        const {data, errors} = await fetchToken(tokenId)

        if (!errors) {
          await logInIfNoError(data, 'google')
        } else if (checkIfErrorIsForNonExistingUser(errors)) {
          try {
            let payload = {
              email,
              name,
              template_id: template_id || 0
            }

            const reqBodyForRegister = {
              method: 'POST',
              data: payload
            } as AxiosRequestConfig

            const res: any = await networker.httpHandler('/users/register', reqBodyForRegister)

            if (!res.errors) {
              segmentTrack('Organization Join Successful', {
                email
              })

              const {data, errors} = await fetchToken(tokenId)

              if (!errors) {
                await logInIfNoError(data, 'google')
              }
            }
          } catch (e) {
            setIsSubmitting(false)
            console.error('User signup failed', e)
            segmentTrack('Signup Failed')
          }
        } else {
          setIsSubmitting(false)
          errors.forEach((error) => dispatch(addFailureNotification(error.message)))
        }
      }
      setIsSubmitting(false)
    },
    [networker]
  )

  return (
    <ButtonWrapper style={isSubmitting ? {marginLeft: '50%', paddingTop: '10px'} : {}}>
      {isSubmitting ? (
        <Spinner />
      ) : (
        <StyledGoogleLoginButton
          clientId={GOOGLE_AUTH_ID}
          buttonText={label}
          onSuccess={handleResponseFromGoogle}
          onFailure={handleResponseFromGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </ButtonWrapper>
  )
}

export default connect()(GoogleAuthButton)
