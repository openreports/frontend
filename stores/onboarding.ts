import { useState } from 'react';
import { createContainer } from 'unstated-next';

import api from '../lib/api';

function onboarding () {
  let [details, setDetails] = useState({
    name: '',
    url: '',
    type: 'ISSUE',
    slug: '',
    isPublic: true
  })
  let [loading, setLoading] = useState(false)
  let [success, setSuccess] = useState('')
  let [error, setError] = useState('')

  let handleChange = (name:string, value:string | boolean) => (
    setDetails({
      ...details,
      [name]: value
    })
  )

  let submit = async () => {
    setLoading(true)
    try {
      const res = await api.post('/projects', details)
      const statusCode = res.status
      const data = await res.json()
      if (statusCode === 201) {
        setSuccess('Successfully created your project')
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

const OnboardingContainer = createContainer(onboarding)

export default OnboardingContainer