import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: {
      toString() {
        const { token } = store.getState().auth;

        return token ? `Bearer ${token}` : null;
      },
    },
  },
});

export default api;
