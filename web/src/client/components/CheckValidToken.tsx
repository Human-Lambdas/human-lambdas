import {useEffect} from 'react'
import useNetworker from 'hooks/useNetworker'
import {addFailureNotification} from 'modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'
import useRouter from 'hooks/useRouter'

interface IProps {
  url: string
  addFailureNotification?: Function
}

const CheckValidInviteToken = (props: IProps) => {
  const networker = useNetworker()
  const {history} = useRouter() as any

  useEffect(() => {
    ;(async function maybeLoggedIn() {
      const response = await networker.httpHandler(props.url, {
        method: 'GET'
      })

      if (response.errors) {
        response.errors.forEach((e) => {
          props.addFailureNotification(e.message)
        })
        history.push('/')
      }
    })()
  }, [])
  return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(CheckValidInviteToken)
