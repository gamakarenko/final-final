import $api from '.';

import { IUsersOrder } from 'store/usersOrders/usersOrders';

export const getUsersOrders = async (): Promise<IUsersOrder[]> => {
  return $api.get('users/allTransfers');
};
