import { useState } from 'react';
import { createContainer } from 'unstated-next';

import api from '../lib/api';
import AuthContainer from './auth';

function login () {
  const Auth = AuthContainer.useContainer()
  let [details, setDetails] = useState({
    email: '',
    password: ''
  })
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState('')
  let [error, setError] = useState('')

  let handleChange = (name:string, value:string) => {
    setDetails({
      ...details,
      [name]: value
    })
  }

  let submit = async () => {
    setLoading(true)
    try {
      const res = await api.post('/auth', details)
      const statusCode = res.status
      const data = await res.json()
      if (statusCode === 201) {
        Auth.handleName(data.user.name)
        Auth.handleAuth(true)
        setSuccess('Successfully logged in to you account')
      } else {
        setError(data.errorMessage || 'Something went wrong')
      }
    } catch(err) {
      console.error(err)
      setError(err.message)
    }
    clearStatus()
    setLoading(false)
  }

  let clearStatus = () => {
    setTimeout(() => {
      setSuccess('')
      setError('')
    }, 2000)
  }

  return {
    details,
    loading,
    success,
    error,
    handleChange,
    submit
  }
}

const LoginContainer = createContainer(login)

export default LoginContainer