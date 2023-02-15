import axios, { AxiosRequestConfig } from 'axios';

export const API_URL =
  'https://0e84-2a00-f940-2-4-2-00-2b1e.eu.ngrok.io/api/v1/';

const $api = axios.create({
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
