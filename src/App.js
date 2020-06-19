import React, { useEffect } from 'react'
import './App.css'
import { useAuth } from './context/auth'
import { Router, useNavigate } from '@reach/router'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <button onClick={() => navigate('/login')}> Login </button>
        <button onClick={() => navigate('/signup')}> Register </button>
      </div>
    </div>
  )
}

const Login = () => {
  const { login } = useAuth()
  useEffect(() => {
    setTimeout(
      () => login({ id: 2, name: 'Avinash Sivaraman' }, '/dashboard'),
      2000
    )
  }, [])
  return <div>Login</div>
}
const Signup = () => {
  const { register } = useAuth()
  useEffect(() => {
    setTimeout(
      () => register({ id: 2, name: 'Avinash Sivaraman' }, '/dashboard'),
      2000
    )
  }, [])
  return <div>Signup</div>
}
const Dashboard = () => {
  const { authenticated } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!authenticated) {
      navigate('/')
    }
  }, [])
  return <div>Dashboard</div>
}

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
