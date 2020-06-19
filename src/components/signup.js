import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'

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

export default Signup
