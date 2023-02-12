import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder, IPassenger } from '../../types/order';
import { createOrderThunk } from './orderThunks';

interface IOrderState {
  order: IOrder;
  isSendingOrder: boolean;
}

const newPassenger: IPassenger = {
  id: 0,
  fullName: '',
  passportId: '',
  departureDate: '',
  departureTime: '',
  phoneNumber: '',
  telegramId: '',
  transferComment: '',
};

const initialState: IOrderState = {
  order: {
    transferDate: '',
    transferTime: '',
    direction: 'fromAirport',
    airport: 'Анталья',
    location: 'улица',
    carType: 'vito',
    adults: 1,
    childrenUnder5: 0,
    childrenAbove5: 0,
    passengers: [newPassenger],
  },
  isSendingOrder: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    editOrderInfo: (state, action: PayloadAction<Partial<IOrder>>) => {
      state.order = {
        ...state.order,
        ...action.payload,
      };
    },

    addNewPassenger: (state) => {
      const maxId = state.order.passengers.reduce(
        (result: number, passenger) =>
          passenger.id > result ? passenger.id : result,
        0,
      );

      state.order.passengers.push({ ...newPassenger, id: maxId + 1 });
    },

    deletePassengerById: (state, action) => {
      state.order.passengers = state.order.passengers.filter(
        (passenger) => passenger.id !== action.payload.id,
      );
    },

    editPassengerById: (state, action: PayloadAction<Partial<IPassenger>>) => {
      state.order.passengers = state.order.passengers.map((passenger) =>
        passenger.id === action.payload.id
          ? { ...passenger, ...action.payload }
          : passenger,
      );
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

export const {
  editOrderInfo,
  clearOrderInfo,
  deletePassengerById,
  addNewPassenger,
  editPassengerById,
} = orderSlice.actions;
export default orderSlice.reducer;
