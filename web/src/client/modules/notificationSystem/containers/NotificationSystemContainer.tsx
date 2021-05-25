import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NotificationSystem from 'react-notification-system'
import {
  addSuccessNotification,
  removeSuccessNotification,
  addFailureNotification,
  removeFailureNotification
} from '../ducks/notificationSystemDuck'

const NotificationSystemContainer = (props) => {
  const notificationSystem = React.createRef()
  useEffect(() => {
    ;(async function showNotifications() {
      try {
        for (let i = 0; i < props.successNotifications.length; i++) {
          displaySuccessNotification(props.successNotifications[i])
          props.removeSuccessNotification(props.successNotifications[i])
        }
        for (let i = 0; i < props.failureNotifications.length; i++) {
          displayFailureNotification(props.failureNotifications[i])
          props.removeFailureNotification(props.failureNotifications[i])
        }
      } catch (e) {
        console.error(e)
      }
    })()
  }, [props.successNotifications, props.failureNotifications])

  const displaySuccessNotification = (message) => {
    const notification: any = notificationSystem.current
    notification.addNotification({
      title: 'Success',
      message: message,
      level: 'success'
    })
  }

  const displayFailureNotification = (message) => {
    const notification: any = notificationSystem.current
    notification.addNotification({
      title: 'There was a problem',
      message: message,
      level: 'error'
    })
  }

  return <NotificationSystem ref={notificationSystem} />
}

const mapStateToProps = (state: any) => {
  return {
    successNotifications: state.notificationReducer.successNotifications,
    failureNotifications: state.notificationReducer.failureNotifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSuccessNotification: (arg) => dispatch(addSuccessNotification(arg)),
    removeSuccessNotification: (arg) => dispatch(removeSuccessNotification(arg)),
    addFailureNotification: (arg) => dispatch(addFailureNotification(arg)),
    removeFailureNotification: (arg) => dispatch(removeFailureNotification(arg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSystemContainer)
