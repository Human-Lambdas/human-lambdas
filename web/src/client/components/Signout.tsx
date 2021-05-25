import {useEffect} from 'react'
import {connect} from 'react-redux'
import useRouter from 'hooks/useRouter'
import {APP_REFRESH_TOKEN_KEY, APP_TOKEN_KEY} from '../utils/constants'
import {addSuccessNotification} from '../modules/notificationSystem/ducks/notificationSystemDuck'

const Signout = ({dispatch}: any) => {
  const {history} = useRouter() as any

  useEffect(() => {
    if (!window) return
    localStorage.removeItem(APP_REFRESH_TOKEN_KEY)
    localStorage.removeItem(APP_TOKEN_KEY)

    dispatch(addSuccessNotification('You’ve successfully signed out.'))

    setTimeout(() => history.replace('/'), 100)
  }, [])
  return null
}

export default connect()(Signout)
