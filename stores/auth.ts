import { useState } from 'react';
import { createContainer } from 'unstated-next';

function auth () {
  let [name, setName] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(false)

  let handleName = (username:string) => {
    setName(username)
  }

  let handleAuth = (is:boolean) => {
    setIsAuthenticated(is)
  }

  return {
    name,
    isAuthenticated,
    handleName,
    handleAuth
  }
}

const AuthContainer = createContainer(auth)

export default AuthContainer