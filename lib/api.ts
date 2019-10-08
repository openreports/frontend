import axios from 'axios'

const API_URL = process.env.API_URL

const unAuthAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export {
  unAuthAPI
}