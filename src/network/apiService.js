// apiService.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://toshiladitya.pythonanywhere.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the token to the headers
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (refreshToken) {
        // Make a request to refresh the token
        const response = await axios.post('https://toshiladitya.pythonanywhere.com/api/token/refresh/', {
          refresh: refreshToken,
        });
        if (response.status === 200) {
          await AsyncStorage.setItem('token', response.data.access);
          api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
          return api(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
