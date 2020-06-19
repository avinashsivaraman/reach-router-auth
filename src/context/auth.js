import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) {
  const [user, setUser] = useState({})
  const [authenticated, setAuth] = useState(false)

  useEffect(() => {
    // TODO check whether the user is authenticated using JWT or other mechanism
    setTimeout(() => {
      setAuth(true)
      setUser({ id: 1, name: 'Avinash Sivaraman' })
    }, 2000)
  }, [])

  const login = (user) => setUser(user)
  const register = (user) => {
    // TODO register the user
    setUser(user)
  }
  const logout = () => {
    setAuth(false)
    setUser({})
  }
  const isLoggedIn = () => user !== {}
  return (
    <AuthContext.Provider
      value={{ user, login, authenticated, register, logout, isLoggedIn }}
      {...props}
    />
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider
