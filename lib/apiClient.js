import axios from 'axios';

const reqresApi = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    // IMPORTANTE: Usa el nombre exacto que pusiste en Postman
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_REQRES, // Pega aquí tu key completa
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default reqresApi;