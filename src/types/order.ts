import { ITripDirection } from "../pages/TransferCreation/TransferCreation.types";

export type ICarType = 'vito' | 'sedan';
export type IAirport = 'Анталья' | 'Даламан';

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

export interface IPassengerEl extends IPassenger {
  id: number;
}

export interface IOrder {
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
