export type ICarType = 'vito' | 'sedan';
export type IAirport = 'Анталья' | 'Даламан';
export type ITripDirection = 'fromAirport' | 'toAirport';

export interface IUser {
  id: number;
  name: string;
  arrivalDate: string | null;
  arrivalTime: string | null;
  flightNumber: string | null;
  phoneNumber: string;
  email: string | null;
  passport: string;
  telegramLogin: string;
  tripComment: string;
  identificationNumber: number;
}

export interface IOrder {
  id: number;
  transferTime: string;
  transferDate: string;
  location: string;
  adultsAmount: 1;
  childrenUnder5: 0;
  childrenAbove5: 0;
  direction: ITripDirection;
  isEnded: boolean;
  carType: ICarType;
  airport: IAirport;
  users: IUser[];
}

export type INewOrder = Omit<IOrder, 'id' | 'isEnded'>; 