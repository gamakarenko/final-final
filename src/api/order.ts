import $api from '.';

import { IOrder } from 'types/order';

export const createOrder = async (order: IOrder) => {
  return $api.post('transfers/create-transfer', { order });
};
