import {createStore, compose, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import makeReducer from './redux/makeReducer'

export const persistConfig = {
  key: 'root',
  storage
}

const makeStore = (initialState) => {
  const reducer = makeReducer()
  const middlewares = []

  let store

  const persistedReducer = persistReducer(persistConfig, reducer)

  if (__PRODUCTION__) {
    store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middlewares)))
  } else {
    const devtoolsExt =
      global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__({maxAge: 50})
    store = createStore(
      persistedReducer,
      initialState,
      compose(applyMiddleware(...middlewares), devtoolsExt || ((f) => f))
    )
  }

  const persistor = persistStore(store)

  return {store, persistor}
}

export default makeStore
