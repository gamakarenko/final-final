import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INewOrder, IUser } from '../../types/order';

import { createOrderThunk } from './newOrderThunks';

interface INewOrderState {
  order: INewOrder;
  isSendingOrder: boolean;
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
    direction: 'fromAirport',
    airport: 'Анталья',
    location: '',
    carType: 'vito',
    adultsAmount: 1,
    childrenUnder5: 0,
    childrenAbove5: 0,
    users: [newUser],
  },
  isSendingOrder: false,
};

const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    editOrderInfo: (state, action: PayloadAction<Partial<INewOrderState>>) => {
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

  extraReducers: (builder) => {
    builder.addCase(createOrderThunk.pending, (state) => {
      state.isSendingOrder = true;
    });
    builder.addCase(createOrderThunk.rejected, (state) => {
      state.isSendingOrder = false;
    });
    builder.addCase(createOrderThunk.fulfilled, (state) => {
      state = initialState;
    });
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
