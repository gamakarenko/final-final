import { ICarType } from 'types/order';

type INumberOfSeats = Record<ICarType, number>;

export const NUMBERS_OF_SEATS: INumberOfSeats = {
  sedan: 3,
  vito: 8,
};
