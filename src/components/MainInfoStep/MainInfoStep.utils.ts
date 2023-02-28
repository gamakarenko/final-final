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

export const filterNumbers = (string: string): number => {
  const filteredNumbers = string.match(/[0-9]/g)?.join('');
  if (!filteredNumbers) {
    return 0;
  }

  const filteredFirstsZeros = filteredNumbers.replace(/^0+/, '');
  return Number(filteredFirstsZeros) || 0;
};

export const setLength = (number: number, maxLength: number): number => {
  let string = String(number);

  if (string.length > maxLength) {
    string = string.slice(0, maxLength);
  }

  return Number(string);
};
