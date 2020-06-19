import React from 'react'
import { Router } from '@reach/router'
import './App.css'

/**Components Import */
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Signup path="/signup" />
      <Dashboard path="/dashboard" />
    </Router>
  )
}

export default App
