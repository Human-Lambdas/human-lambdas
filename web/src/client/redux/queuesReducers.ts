import {IQueue} from 'universal/types/generic'
interface QueueState {
  queues: Array<IQueue>
  selectedQueue: IQueue | null
}

const initialState: QueueState = {
  queues: [],
  selectedQueue: null
}

const types = {
  SET_SELECTED_QUEUE: 'SET_SELECTED_QUEUE',
  CLEAR_SELECTED_QUEUE: 'CLEAR_SELECTED_QUEUE',
  SET_QUEUES: 'SET_QUEUES',
  ADD_QUEUE: 'ADD_QUEUE',
  UPDATE_QUEUE: 'UPDATE_QUEUE'
}

export const workfllowActions = {
  setSelectedQueue: (payload) => ({
    type: types.SET_SELECTED_QUEUE,
    payload
  }),
  clearSelectedQueue: () => ({
    type: types.SET_SELECTED_QUEUE
  }),
  setQueues: (payload) => ({
    type: types.SET_QUEUES,
    payload
  }),
  addQueue: (payload: IQueue) => ({
    type: types.ADD_QUEUE,
    payload
  }),
  updateQueue: (payload: IQueue) => ({
    type: types.UPDATE_QUEUE,
    payload
  })
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SELECTED_QUEUE:
      state = {
        ...state,
        selectedQueue: action.payload
      }
      break
    case types.SET_QUEUES:
      state = {
        ...state,
        queues: action.payload
      }
      break
    case types.CLEAR_SELECTED_QUEUE:
      state = {
        ...state,
        selectedQueue: null
      }
      break
    case types.ADD_QUEUE:
      state = {
        ...state,
        queues: [...state.queues, action.payload]
      }
      break
    case types.UPDATE_QUEUE:
      const queues = state.queues.filter((q) => q.id !== action.payload.id)
      state = {
        ...state,
        queues: [...queues, action.payload]
      }
      break
    default:
      break
  }
  return state
}
