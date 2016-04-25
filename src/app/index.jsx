'use strict'

import './styles/reset.styl'
import './styles/style.styl'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import store from './store'

import Routes from './routes.jsx'

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Routes />
    </Provider>
  </div>,
  document.getElementById('body')
)
