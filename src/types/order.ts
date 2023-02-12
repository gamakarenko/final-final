export type ICarType = 'vito' | 'sedan';

export interface IPassenger {
  fullName: string;
  passportId: string;
  departureDate: string;
  departureTime: string;
  phoneNumber: string;
  telegramId: string;
  transferComment: string;
}

export interface IOrder {
  transferDate: string;
  transferTime: string;
  pickYouUpFromAirPort: boolean;
  start: string;
  end: string;
  carType: ICarType;
  adults: number;
  childrenUnder5: number;
  childrenAbove5: number;
  passengers: IPassenger[];
}
