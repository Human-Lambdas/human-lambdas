import {useEffect} from 'react'
import useRouter from 'hooks/useRouter'
import useNetworker from 'hooks/useNetworker'
import {connect} from 'react-redux'
import {addFailureNotification} from 'modules/notificationSystem/ducks/notificationSystemDuck'

const useAuth = ({dispatch}: any) => {
  const {history} = useRouter() as any
  const networker = useNetworker()
  const {accessObj} = networker as any

  useEffect(() => {
    if (!accessObj) {
      dispatch(addFailureNotification('You must log in first!'))
      history.push('/')
    }
  }, [networker, accessObj, history])

  return null
}

export default connect()(useAuth)
