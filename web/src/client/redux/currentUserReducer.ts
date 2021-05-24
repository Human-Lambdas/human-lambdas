import {IUser} from 'types/generic'
const ADD_USER = 'hl/dashboard/ADD_USER'

export default function reducer(state = {}, action = {type: ''}) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const addUser = (payload: IUser) => {
  return {
    type: ADD_USER,
    payload
  }
}
