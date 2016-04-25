'use strict'

// Importing styles.

import './styles/reset.styl'
import './styles/style.styl'

// Importing libraries.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Importing store.

import store from './store'

// Importing routes.

import Routes from './routes.jsx'

// Rendering react application to DOM node.

ReactDOM.render(
    <Provider store={ store }>
      <Routes />
    </Provider>,
  document.getElementById('body')
)
