import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = useState({})
  const [authenticated, setAuth] = useState(false)

  useEffect(() => {
    // TODO check whether the user is authenticated using JWT or other mechanism
    console.log('Loaded Auth Provider')
    console.log(
      'Check with Backend when the page is loaded and set the auth state accordingly'
    )
  }, [])

  const login = async (user, redirectURL) => {
    // TODO: API call for Login
    const request = await fetch('https://randomuser.me/api')
    const data = await request.json()
    const {
      id: { value },
      name: { first, last },
    } = data.results[0]
    const newUser = {
      id: value,
      name: `${first} ${last}`,
    }
    setAuth(true)
    setUser(newUser)
    if (redirectURL) {
      navigate(redirectURL)
    }
  }
  const register = (user, redirectURL) => {
    // TODO register the user
    setAuth(true)
    setUser(user)
    if (redirectURL) {
      navigate(redirectURL)
    }
  }
  const logout = () => {
    setAuth(false)
    setUser({})
  }

  return (
    <AuthContext.Provider
      value={{ user, login, authenticated, register, logout }}
      {...props}
    />
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider
