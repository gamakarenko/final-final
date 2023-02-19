import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder, IUser } from '../../types/order';

interface INewOrderState {
  order: IOrder;
}

const newUser = {
  id: 0,
  name: '',
  arrivalDate: '',
  arrivalTime: '',
  flightNumber: '',
  phoneNumber: '',
  email: '',
  passport: '',
  telegramLogin: '',
  tripComment: '',
  identificationNumber: 0,
};

const initialState: INewOrderState = {
  order: {
    transferDate: '',
    transferTime: '',
    carType: 'vito',
    adultsAmount: 1,
    childrenUnder5: 0,
    childrenAbove5: 0,
    startLocation: '',
    endLocation: '',
    isPickUpFromAirport: false,
    users: [newUser],
  },
};

const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    editOrderInfo: (state, action: PayloadAction<Partial<IOrder>>) => {
      state.order = {
        ...state.order,
        ...action.payload,
      };
    },

    addNewPassenger: (state) => {
      const maxId = state.order.users.reduce(
        (result: number, user) => (user.id > result ? user.id : result),
        0,
      ) as unknown as number;

      state.order.users.push({ ...newUser, id: maxId + 1 });
    },

    deletePassengerById: (state, action: PayloadAction<{ id: number }>) => {
      state.order.users = state.order.users.filter(
        (user) => user.id !== action.payload.id,
      );
    },

    editPassengerById: (state, action: PayloadAction<Partial<IUser>>) => {
      state.order.users = state.order.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user,
      );
    },

    clearOrderInfo: (state) => {
      state = initialState;
    },
  },
});

export const {
  editOrderInfo,
  clearOrderInfo,
  deletePassengerById,
  addNewPassenger,
  editPassengerById,
} = newOrderSlice.actions;

export default newOrderSlice.reducer;
