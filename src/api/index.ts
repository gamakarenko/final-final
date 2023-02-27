import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'https://96a3-82-179-72-69.eu.ngrok.io/api/v1/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'ngrok-skip-browser-warning': 'true',
  },
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const tg = (window as any).Telegram?.WebApp;
  let user = tg?.initDataUnsafe?.user;
  config.headers!.id = user?.id;
  
  return config;
});

export default $api;
