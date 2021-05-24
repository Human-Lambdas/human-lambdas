import {combineReducers} from 'redux'
import notificationReducer from '../modules/notificationSystem/ducks/notificationSystemDuck'
import usersReducer from './usersReducer'
import currentUserReducer from './currentUserReducer'
import workfllowsReducer from './queuesReducers'
import filtersReducer from './filtersReducer'

const appReducers = {
  users: usersReducer,
  currentUser: currentUserReducer,
  queues: workfllowsReducer,
  filters: filtersReducer
}

const makeRootReducer = (appReducer) => (state, action) => {
  /**
   * TODO Allow user to reset state
   */
  return appReducer(state, action)
}

const makeReducer = (newReducers = {}) => {
  Object.assign(appReducers, newReducers)
  const appReducer = combineReducers({...appReducers, notificationReducer})
  return makeRootReducer(appReducer)
}

export default makeReducer
