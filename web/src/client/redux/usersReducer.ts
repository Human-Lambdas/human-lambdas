const types = {
  SET_USERS: 'SET_USERS'
}

export const usersActions = {
  setUsers: (payload) => ({
    type: types.SET_USERS,
    payload
  })
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.SET_USERS:
      state = [...action.payload]
      break
    default:
      break
  }
  return state
}
