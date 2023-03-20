import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

export async function createPost(username, animeTitle) {
  const response = await api.post('/post/', {
    username, animeTitle
  })
  return response.data
}