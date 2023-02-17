export type ICarType = 'vito' | 'sedan';
export type IAirport = 'Анталья' | 'Даламан';
export type ITripDirection = 'fromAirport' | 'toAirport';

export interface IPassenger {
  id: number;
  fullName: string;
  passportId: string;
  departureDate: string;
  departureTime: string;
  phoneNumber: string;
  telegramId: string;
  transferComment: string;
}

export interface IOrder {
  id?: number;
  transferDate: string;
  transferTime: string;
  direction: ITripDirection;
  airport: IAirport;
  location: string;
  carType: ICarType;
  adults: number;
  childrenUnder5: number;
  childrenAbove5: number;
  passengers: IPassenger[];
}
