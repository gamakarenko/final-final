import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://5.101.50.27:8080/api/v1';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  //@ts-ignore
  let tg = window?.Telegram?.WebApp;
  let user = tg?.initDataUnsafe?.user;
  config.headers!.id = 11111;
  return config;
});

export default $api;

// /create-transfer
// /allTransfers
// http://localhost:8080/api/v1/users/allTransfers
// http://localhost:8080/api/v1/transfers/create-transfer
