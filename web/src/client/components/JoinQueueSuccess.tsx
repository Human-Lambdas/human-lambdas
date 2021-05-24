import React, {useEffect, useState} from 'react'
import useRouter from 'hooks/useRouter'
import Loading from './LoadingPage'
import useNetworker from 'hooks/useNetworker'
import {AxiosRequestConfig} from 'axios'
import {
  addFailureNotification,
  addSuccessNotification
} from 'modules/notificationSystem/ducks/notificationSystemDuck'
import {connect} from 'react-redux'
import LoginPage from './LoginPage'
import CheckValidInviteToken from './CheckValidToken'

const JoinQueueSuccess = (props) => {
  const {history} = useRouter() as any
  const networker = useNetworker()
  const [succeeded, setSucceeded] = useState(false)
  const [email, setEmail] = useState('')
  const token = props.match.params.inviteId

  useEffect(() => {
    ;(async function verifySignUp() {
      const payload = {
        method: 'POST'
      } as AxiosRequestConfig
      const response: any = await networker.httpHandler(`/users/invitation/${token}`, payload)

      if (response.errors) {
        response.errors.forEach((e) => {
          props.addFailureNotification(e.message)
        })
        history.push('/')
      } else {
        props.addSuccessNotification('You have now joined this organization!')
        setEmail(response.data.email)
        setSucceeded(true)
      }
    })()
  }, [])

  return (
    <>
      {succeeded ? <LoginPage email={email} /> : <Loading />}
      <CheckValidInviteToken url={`/users/invitation/${token}`} />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg))
  }
}

export default connect(null, mapDispatchToProps)(JoinQueueSuccess)
