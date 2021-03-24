import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'

import { Routes } from './routes'

import { browserHistory } from './browserHistory'

import './index.scss'

const Index = () => {
  return (
    <Router history={browserHistory}>
      <Routes />
    </Router>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById('root')
)
