import { createSlice } from '@reduxjs/toolkit';
import { ITripDirection } from 'pages/TransferCreation/TransferCreation.types';
import { IAirport, ICarType } from 'types/order';
import { getUsersOrdersThunk } from './userOrdersThunk';

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
  },
});

export default usersOrdersSlice.reducer;
