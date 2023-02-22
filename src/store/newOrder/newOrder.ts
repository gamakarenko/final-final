import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder, IUser } from '../../types/order';
import { NUMBERS_OF_SEATS } from 'utils/constants';

interface INewOrderState {
  order: IOrder;
  errorText: string;
}

const newUser = {
  id: -1,
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
  uiKey: 0,
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
  errorText: '',
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

      const { users, adultsAmount, childrenAbove5, childrenUnder5 } =
        state.order;
      const usersAmount = users.length;
      const neededUsersAmount = adultsAmount + childrenAbove5 + childrenUnder5;

      if (usersAmount > neededUsersAmount) {
        state.order.users.length = neededUsersAmount;
      } else if (usersAmount < neededUsersAmount) {
        while (state.order.users.length < neededUsersAmount) {
          const maxKey = state.order.users.reduce(
            (result: number, user) => (user.uiKey > result ? user.uiKey : result),
            0,
          ) as unknown as number;
          state.order.users.push({ ...newUser, uiKey: maxKey + 1 });
        }
      }

      if (
        state.order.adultsAmount +
          state.order.childrenAbove5 +
          state.order.childrenUnder5 >
        NUMBERS_OF_SEATS[state.order.carType]
      ) {
        state.errorText = 'Количество пассажиров превышает количество мест';
      } else {
        state.errorText = '';
      }
    },

    editPassengerByUiKey: (state, action: PayloadAction<Partial<IUser>>) => {
      state.order.users = state.order.users.map((user) =>
        user.uiKey === action.payload.uiKey ? { ...user, ...action.payload } : user,
      );
    },

    clearOrderInfo: () => initialState,
  },
});

export const { editOrderInfo, clearOrderInfo, editPassengerByUiKey } =
  newOrderSlice.actions;

export default newOrderSlice.reducer;
