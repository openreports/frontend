import React from 'react'
import AuthContainer from '../stores/auth'
import api from '../lib/api'

interface Props {
  children: React.ReactNode
}

const Auth = (props:Props) => {
  const Auth = AuthContainer.useContainer()

  const check = async () => {
    const res = await api.get('/auth')
    
    const data = await res.json()
  
    if (data.user) {
      Auth.handleName(data.user.name)
      Auth.handleAuth(true)
    }
  }

  check()

  return (
    <>
      {props.children}
    </>
  )
}

export default Auth