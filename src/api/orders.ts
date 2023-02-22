import $api from '.';

import { IOrder } from 'types/order';

export const createOrder = async (order: IOrder) => {
  return $api.post('transfers/create-transfer', { order });;
};

export const getOrders = async () => {
  return $api.get('users/all-transfers');
};

export const putOrder = async (order: IOrder) => {
  return $api.put('transfers/updateTransfer', { order });
};

export const deleteOrder = async (order: IOrder) => {
  return await $api.delete('transfers/deleteTransfer', {
    data: { order },
  });
};
