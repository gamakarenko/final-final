import { IOrder } from 'types/order';

export const compareAddress = (
  order: IOrder,
  locationOne: string,
  locationTwo: string,
) => {
  if (
    (order.startLocation.toLowerCase().match(locationOne) &&
      order.endLocation.toLowerCase().match(locationTwo)) ||
    (order.startLocation.toLowerCase().match(locationTwo) &&
      order.endLocation.toLowerCase().match(locationOne))
  ) {
    return true;
  }

  return false;
};
