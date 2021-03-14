import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import { historyModel } from './models/history'

import { App } from './app'

import './index.scss'

const Index = () => {
  const { history } = historyModel

  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)
