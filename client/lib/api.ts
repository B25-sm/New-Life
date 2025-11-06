import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth API calls
export const register = async (userData: {
  name: string
  email: string
  password: string
}) => {
  const response = await api.post('/auth/register', userData)
  return response.data
}

export const login = async (credentials: {
  email: string
  password: string
}) => {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

export const getMe = async () => {
  const response = await api.get('/auth/me')
  return response.data
}

// User API calls
export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export default api

