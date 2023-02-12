import $api from '.';

export const createOrder = (order: any) => {
  return $api.post('transfers/create-transfer', order);
};
