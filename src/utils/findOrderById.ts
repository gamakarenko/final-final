import { IOrder } from 'types/order';

export const findOrderById = (orders: IOrder[], id: string | undefined) => {
  if (!id) {
    return null;
  }

  return orders.find((order) => order.id === Number(id)) || null;
};
