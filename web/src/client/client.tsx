import React from 'react'
import {render} from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as serviceWorker from './serviceWorker/sw'
import Root from './Root'
import makeStore from './makeStore'
import * as FullStory from '@fullstory/browser'

if (__PRODUCTION__) {
  FullStory.init({orgId: 'SZ9BS'})
}

const initialState = {}
export const {store, persistor} = makeStore(initialState)
render(<Root store={store} persistor={persistor} />, document.getElementById('root'))

if ((module as any).hot) {
  ;(module as any).hot.accept('./Root', () => {
    const Root = require('./Root').default
    render(<Root store={store} persistor={persistor} />, document.getElementById('root'))
  })
}

/**
 * To allow app to work offline and load faster
 * set unregister() to register() below. Note this
 * comes with some pitfalls.
 */
serviceWorker.unregister()
