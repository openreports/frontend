import { useState } from 'react';
import { createContainer } from 'unstated-next';

import api from '../lib/api';

function auth () {
  let [name, setName] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(false)

  let handleName = (username:string) => {
    setName(username)
  }

  let handleAuth = (is:boolean) => {
    setIsAuthenticated(is)
  }

  let logout = async () => {
    const res = await api.post('/logout')
    const statusCode = res.status

    const data = await res.json()

    if (statusCode === 200) {
      setName('')
      setIsAuthenticated(false)
    } else {
      console.error(data)
    }
  }

  return {
    name,
    isAuthenticated,
    handleName,
    handleAuth,
    logout
  }
}

const AuthContainer = createContainer(auth)

export default AuthContainer