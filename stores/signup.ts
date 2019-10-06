import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { unAuthAPI } from '../lib/api';

function signup () {
  let [details, setDetails] = useState({
    name: '',
    email: '',
    password: ''
  })
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState('')
  let [error, setError] = useState('')

  let handleChange = (name, value) => (
    setDetails({
      ...details,
      [name]: value
    })
  )

  let submit = async () => {
    setLoading(true)
    try {
      const res = await unAuthAPI.post('/users', details)
      if (res.status === 201) {
        setSuccess('Successfully created your account')
        clearStatus()
      }
    } catch (err) {
      setError(err.response.data.errorMessage)
      clearStatus()
      console.error(err.response)
    }
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