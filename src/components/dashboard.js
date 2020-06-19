import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import { useNavigate } from '@reach/router'

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

export default Dashboard
