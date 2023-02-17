import $api from '.';

import { IUsersOrder } from 'store/usersOrders/usersOrders';
import { IOrder } from 'types/order';

export const getUsersOrders = async (): Promise<IUsersOrder[]> => {
  const res = await $api.get('users/all-transfers');

  return res.data;
};

export const putUsersOrder = async (order: IOrder) => {
  const res = await $api.put('transfers/updateTransfer', { order });

  return res.data;
};
