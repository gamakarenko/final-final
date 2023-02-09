import axios, { AxiosRequestConfig } from 'axios';

// export const API_URL = 'https://178.21.11.250/api/v1/';
export const API_URL = 'https://6c48-82-179-72-69.eu.ngrok.io/api/v1/';

const $api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // let user = tg?.initDataUnsafe?.user;
  config.headers!.id = 11111;
  return config;
});

export default $api;
