import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTransfer } from '../../api/transfer';

//TODO Добавить передачу order в async, и формировать ее извне
export const createTransferThunk = createAsyncThunk('transfers/createTransferThunk', async () => {
  const order = {
    order: {
      transferDate: '2022-12-08',
      transferTime: '13:11',
      pickYouUpFromAirPort: 'true',
      start: 'qqq',
      end: 'qqq',
      carType: 'Sedan',
      adults: '1',
      childrenUnder5: '1',
      childrenAbove5: '1',
      passengers: [
        {
          fullName: '1',
          passportId: '1',
          departureDate: '2022-12-31',
          departureTime: '13:11',
          phoneNumber: '1',
          telegramId: '1',
          transferComment: '1',
        },
        {
          fullName: '2',
          passportId: '2',
          departureDate: '2022-12-10',
          departureTime: '13:12',
          phoneNumber: '2',
          telegramId: '2',
          transferComment: '2',
        },
      ],
    },
  };

  // const res = await createTransfer(order);
  const res = 'create transfer DONE' 
  console.log('createTransferThunk', res);
});
