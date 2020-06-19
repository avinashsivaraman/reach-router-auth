import React from 'react'
import { useNavigate } from '@reach/router'

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

export default Home
