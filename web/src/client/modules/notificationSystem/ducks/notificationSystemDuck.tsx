const SUCCESS_NOTIFICATION = 'hl/notificationSystem/SUCCESS_NOTIFICATION'
const REMOVE_SUCCESS_NOTIFICATION = 'hl/notificationSystem/REMOVE_SUCCESS_NOTIFICATION'
const FAILURE_NOTIFICATION = 'hl/notificationSystem/FAILURE_NOTIFICATION'
const REMOVE_FAILURE_NOTIFICATION = 'hl/notificationSystem/REMOVE_FAILURE_NOTIFICATION'

interface Action {
  type: string
  payload: any
}

export default function reducer(
  state = {successNotifications: [] as string[], failureNotifications: [] as string[]},
  action: Action
) {
  switch (action.type) {
    case SUCCESS_NOTIFICATION:
      state = {
        ...state,
        successNotifications: [...state.successNotifications, action.payload.message]
      }
      break
    case REMOVE_SUCCESS_NOTIFICATION:
      const newSuccessNotifications = state.successNotifications.filter((msg) => {
        msg !== action.payload.message
      })
      state = {
        ...state,
        successNotifications: newSuccessNotifications
      }
      break
    case FAILURE_NOTIFICATION:
      state = {
        ...state,
        failureNotifications: [...state.failureNotifications, action.payload.message]
      }
      break
    case REMOVE_FAILURE_NOTIFICATION:
      const newFailureNotifications = state.failureNotifications.filter((msg) => {
        msg !== action.payload.message
      })
      state = {
        ...state,
        failureNotifications: newFailureNotifications
      }
      break
    default:
      break
  }
  return state
}

export function addSuccessNotification(message: string) {
  return {
    type: SUCCESS_NOTIFICATION,
    payload: {
      message
    }
  }
}

export function removeSuccessNotification(message: string) {
  return {
    type: REMOVE_SUCCESS_NOTIFICATION,
    payload: {
      message
    }
  }
}

export function addFailureNotification(message: string) {
  return {
    type: FAILURE_NOTIFICATION,
    payload: {
      message
    }
  }
}

export function removeFailureNotification(message: string) {
  return {
    type: REMOVE_FAILURE_NOTIFICATION,
    payload: {
      message
    }
  }
}
