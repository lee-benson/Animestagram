import api from './apiConfig.js'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

export async function createPost(title, comment, rating) {
  const response = await api.post('/post/', {
    title, rating, comment
  })
  return response.data
}