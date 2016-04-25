import { combineReducers, compose, applyMiddleware, createStore } from 'redux'

import caw from './caw'
import counter from './counter'

let reducer = combineReducers({ caw, counter })

import thunk from 'redux-thunk'
let middleware = [thunk]

const store = createStore(reducer, compose(
  applyMiddleware(...middleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
))

export default store
