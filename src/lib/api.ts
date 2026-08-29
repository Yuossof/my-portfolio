import axios from 'axios'

// Use Vite environment variable
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BASE_URL = (import.meta as any)?.env?.VITE_API_BASE || ''
console.log(import.meta.env.VITE_API_BASE)

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
