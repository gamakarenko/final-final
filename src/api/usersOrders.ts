import $api from '.';

import { IUsersOrder } from 'store/usersOrders/usersOrders';

export const getUsersOrders = async (): Promise<IUsersOrder[]> => {
  const res = await $api.get('users/all-transfers');
  
  return res.data;
};
