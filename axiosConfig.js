import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tu-servicio.com',
});

// Usamos un interceptor para que siempre lea el token actualizado
api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_API_KEY_REQRES;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;