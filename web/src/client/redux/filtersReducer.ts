interface IAuditFilters {
  queue_id?: number
  worker_id?: number
}

interface IFilterState {
  auditFilters: IAuditFilters
}

const initialState: IFilterState = {
  auditFilters: {
    queue_id: undefined,
    worker_id: undefined
  }
}

const types = {
  SET_USER_ON_AUDITS: 'SET_USER_ON_AUDITS',
  SET_QUEUE_ON_AUDITS: 'SET_QUEUE_ON_AUDITS'
}

export const filterActions = {
  setAuditsQueue: (payload) => ({
    type: types.SET_QUEUE_ON_AUDITS,
    payload
  }),
  setAuditsUser: (payload) => ({
    type: types.SET_USER_ON_AUDITS,
    payload
  })
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_QUEUE_ON_AUDITS:
      state = {
        ...state,
        auditFilters: {
          ...state.auditFilters,
          queue_id: action.payload
        }
      }
      break
    case types.SET_USER_ON_AUDITS:
      state = {
        ...state,
        auditFilters: {
          ...state.auditFilters,
          worker_id: action.payload
        }
      }
      break
    default:
      break
  }
  return state
}
