import axios from 'axios';
import { useAuthStore } from '../stores/authStore'; // Importa a store de autenticação

const COGNITO_BASE_URL = 'https://cognito-idp.sa-east-1.amazonaws.com/';
const COGNITO_CLIENT_ID = '2smqfkuv4iu3d0lb65g7kgd24k';

const api = axios.create({
  baseURL: COGNITO_BASE_URL,
  headers: {
    'Content-Type': 'application/x-amz-json-1.1',
  },
});

// Interceptador de requisição para incluir o token JWT no cabeçalho
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Health check endpoint
export const tasks = {
  check: () => api.get('/tasks'),
};

export const createTask = {
  check: () => api.get('/createtask'),
};

// Health check endpoint
export const health = {
  check: () => api.get('/health'),
};

export default api;