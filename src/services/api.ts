import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
