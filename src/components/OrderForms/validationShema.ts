import { bool, date, number, object, string } from "yup";

export const orderSheme = object({
    transferDate: date(),
    transferTime: number().typeError('Введите число'),
    start: string().trim(),
    end: string().trim(),
    pickYouUpFromAirPort:  bool().default(false),
    carType: string().trim(),
    adults: number().typeError('Введите число'),
    childrenUnder5: number().typeError('Введите число'),
    childrenAbove5: number().typeError('Введите число'),
})

export const passengerSheme = object({
    fullName: string().trim(),
    passportID: string().trim(),
    dateDeparture: number().typeError('Введите число'),
    timeDeparture: number().typeError('Введите число'),
    flightId: string().trim(),
    phoneNumber: number(),
    telegramId: string().trim(),
    transferComment: string().trim()
})



export const validationSchema = object({
    order: orderSheme,
    passenger: passengerSheme,
  })