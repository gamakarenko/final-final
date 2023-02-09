import $api from '.';

export const createTransfer = (order: any) => {
  return $api.post('transfers/create-transfer', order);
};
