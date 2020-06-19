import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useAuth } from './context/auth'

function App() {
  const { authenticated, user } = useAuth()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {authenticated
            ? `Welcome ${user.name}!!!`
            : 'You are not authenticated'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
