import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'https://a2e2-37-20-208-79.eu.ngrok.io/api/v1/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // let user = tg?.initDataUnsafe?.user;
  config.headers!.id = 1;
  return config;
});

export default $api;
