import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'

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

export default Login
