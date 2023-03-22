import api from "./apiConfig.js";

export async function getProfile(username) {
  const response = await api.get(`/user/${username}`)
  return response.data
}

const LOCALSTORAGE_KEY = 'token'

export async function signin(username, password) {
  const response = await api.post('/auth/signin', {
    username, password
  })
  console.log({ username });
  console.log({ password });
  localStorage.setItem(LOCALSTORAGE_KEY, response.data)
  console.log(response);
  return response
}
export async function signup(username, password) {
  const response = await api.post('/auth/signup', {
    username, password
  })

  localStorage.setItem(LOCALSTORAGE_KEY, response.data)

  return response.data
}