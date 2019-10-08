import { useState } from 'react';
import { createContainer } from 'unstated-next';

import api from '../lib/api';
import AuthContainer from './auth';

function signup () {
  const Auth = AuthContainer.useContainer()
  let [details, setDetails] = useState({
    name: '',
    email: '',
    password: ''
  })
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState('')
  let [error, setError] = useState('')

  let handleChange = (name:string, value:string) => (
    setDetails({
      ...details,
      [name]: value
    })
  )

  let submit = async () => {
    setLoading(true)
    try {
      const res = await api.post('/users', details)
      const statusCode = res.status
      const data = await res.json()
      if (statusCode === 201) {
        Auth.handleName(data.name)
        Auth.handleAuth(true)
        setSuccess('Successfully created your account')
      } else {
        setError(data.errorMessage || 'Something went wrong')
      }
    } catch (err) {
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
    handleChange,
    submit,
    loading,
    success,
    error
  }
}

const SignupContainer = createContainer(signup)

export default SignupContainer