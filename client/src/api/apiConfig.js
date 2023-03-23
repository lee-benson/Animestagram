import axios from 'axios'

const LOCALSTORAGE_KEY = 'token'


const api = axios.create({
  baseURL: 'https://animestagram-back.vercel.app/api/',
  headers: {
    Authorization: localStorage.getItem(LOCALSTORAGE_KEY)
  }
})



api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  config.headers.Authorization = token
  return config
})

export default api
