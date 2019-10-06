import axios from 'axios'
import ENV from './env'

const unAuthAPI = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export {
  unAuthAPI
}