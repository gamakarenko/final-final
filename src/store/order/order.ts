import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder } from '../../types/order';
import { createOrderThunk } from './orderThunks';

interface IOrderState {
  order: IOrder;
  isSendingOrder: boolean;
}

const initialState: IOrderState = {
  order: {
    transferDate: '',
    transferTime: '',
    pickYouUpFromAirPort: true,
    start: 'Анталья',
    end: 'Анталья',
    carType: 'vito',
    adults: 1,
    childrenUnder5: 0,
    childrenAbove5: 0,
    passengers: [
      {
        fullName: '',
        passportId: '',
        departureDate: '',
        departureTime: '',
        phoneNumber: '',
        telegramId: '',
        transferComment: '',
      },
    ],
  },
  isSendingOrder: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderInfo: (state, action: PayloadAction<Partial<IOrder>>) => {
      state.order = {
        ...state.order,
        ...action.payload,
      };
    },
    clearOrderInfo: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createOrderThunk.pending, (state) => {
      state.isSendingOrder = true;
    });
    builder.addCase(createOrderThunk.rejected, (state) => {
      state.isSendingOrder = false;
    });
    builder.addCase(createOrderThunk.fulfilled, (state, action) => {
      state.isSendingOrder = false;
      console.log('create transfer: DONE');
    });
  },
});

export default orderSlice.reducer;
