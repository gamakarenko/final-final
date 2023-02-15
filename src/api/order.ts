import $api from '.';

export const createOrder = async (order: any) => {
  return $api.post('transfers/create-transfer', order);
};
