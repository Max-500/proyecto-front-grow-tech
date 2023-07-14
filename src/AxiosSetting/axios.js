import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

instance.interceptors.request.use(config => {
  // Recuperar el token de autenticación de LocalStorage
  const authToken = localStorage.getItem('authToken')

  // Verificar si la URL de la solicitud no coincide con la ruta de registro
  if (!config.url.includes('/register') && !config.url.includes('/login')) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})

export default instance