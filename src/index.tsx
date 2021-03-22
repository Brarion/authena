import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import { App } from './app'

import { browserHistory } from './browserHistory'

import './index.scss'

const Index = () => {
  return (
    <Router history={browserHistory}>
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
