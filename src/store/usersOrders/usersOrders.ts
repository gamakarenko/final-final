import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAirport, ICarType, ITripDirection } from 'types/order';

import { getUsersOrdersThunk, putUsersOrderThunk } from './usersOrdersThunk';

interface IUser {
  id: number;
  name: string;
  arrivalDate: string;
  flightNumber: string | null;
  phoneNumber: string;
  email: string | null;
  passport: string;
  telegramLogin: string;
  tripComment: string;
  identificationNumber: number;
}

export interface IUsersOrder {
  id: number;
  tripDate: string;
  location: string;
  adultsAmount: 1;
  childrenUnder5: 0;
  childrenAbove5: 0;
  direction: ITripDirection;
  isEnded: boolean;
  autoType: ICarType;
  airport: IAirport;
  users: IUser[];
}

interface IUsersOrdersState {
  orders: IUsersOrder[];
  isOrdersFetching: boolean;
}

const initialState: IUsersOrdersState = {
  orders: [],
  isOrdersFetching: false,
};

const usersOrdersSlice = createSlice({
  name: 'usersOrders',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsersOrdersThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(getUsersOrdersThunk.rejected, (state) => {
      state.isOrdersFetching = false;
    });
    builder.addCase(getUsersOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.isOrdersFetching = false;
    });

    builder.addCase(putUsersOrderThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(putUsersOrderThunk.rejected, (state) => {
      state.isOrdersFetching = false;
    });
    builder.addCase(
      putUsersOrderThunk.fulfilled,
      (state, action: PayloadAction<IUsersOrder>) => {
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order,
        );

        state.isOrdersFetching = false;
      },
    );
  },
});

export default usersOrdersSlice.reducer;
