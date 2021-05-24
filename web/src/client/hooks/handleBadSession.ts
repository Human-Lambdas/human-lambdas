import {RouterProps} from 'react-router'
import {APP_REFRESH_TOKEN_KEY, APP_TOKEN_KEY} from 'utils/constants'
import {store} from '../client'
import {addFailureNotification} from '../modules/notificationSystem/ducks/notificationSystemDuck'
import {IError} from '../types/generic'

const handleBadSession = (errors: IError[], history: RouterProps['history'] | undefined) => {
  if (Array.isArray(errors) && errors.length > 0) {
    errors.forEach((error) => store.dispatch(addFailureNotification(error.message)))
    const keysToRemove = [APP_REFRESH_TOKEN_KEY, APP_TOKEN_KEY]
    keysToRemove.forEach((item) => window.localStorage.removeItem(item))
    history?.replace('/')
  }
}

export default handleBadSession
