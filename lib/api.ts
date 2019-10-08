const API_URL = process.env.API_URL || 'https://openreports-api.herokuapp.com/'

const defaultOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

const Fetcher = {
  get: (path:string) => (
    fetch(`${API_URL}${path}`, {
      method: 'GET',
      ...defaultOptions as any
    })
  ),
  post: (path:string, data:any) => (
    fetch(`${API_URL}${path}`, {
      method: 'POST',
      ...defaultOptions as any,
      body: JSON.stringify(data)
    })
  )
}

export default Fetcher