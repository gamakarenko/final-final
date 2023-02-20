import $api from '.';

import { IOrder } from 'types/order';

export const createOrder = async (order: IOrder) => {
  const res = await $api.post('transfers/create-transfer', { order });

  return res.data.body;
};

export const getOrders = async () => {
  const res = await $api.get('users/all-transfers');

  return res.data;
};

export const putOrder = async (order: IOrder) => {
  const res = await $api.put('transfers/updateTransfer', { order });

  return res.data;
};

export const deleteOrder = async (order: IOrder): Promise<number> => {
  const res = await $api.delete('transfers/deleteTransfer', {
    data: { order },
  });

  return res.data;
};
