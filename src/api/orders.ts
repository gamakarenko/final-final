import $api from '.';

import { IOrder } from 'types/order';

export const createOrder = async (order: IOrder) => {
  return $api.post('transfers/create-transfer', { order });
};
//TODO tipisation
export const getOrders = async (): Promise<any> => {
  const res = await $api.get('users/all-transfers');

  return res.data;
};
//TODO tipisation
export const putOrder = async (order: any) => {
  const res = await $api.put('transfers/updateTransfer', { order });

  return res.data;
};

