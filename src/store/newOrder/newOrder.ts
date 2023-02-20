import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder, IUser } from '../../types/order';
import { NUMBERS_OF_SEATS } from 'utils/constants';

interface INewOrderState {
  order: IOrder;
  errorText: string;
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
          const maxId = state.order.users.reduce(
            (result: number, user) => (user.id > result ? user.id : result),
            0,
          ) as unknown as number;

          state.order.users.push({ ...newUser, id: maxId + 1 });
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

    // addNewPassenger: (state) => {
    //   const maxId = state.order.users.reduce(
    //     (result: number, user) => (user.id > result ? user.id : result),
    //     0,
    //   ) as unknown as number;

    //   state.order.users.push({ ...newUser, id: maxId + 1 });
    // },

    // deletePassengerById: (state, action: PayloadAction<{ id: number }>) => {
    //   state.order.users = state.order.users.filter(
    //     (user) => user.id !== action.payload.id,
    //   );
    // },

    editPassengerById: (state, action: PayloadAction<Partial<IUser>>) => {
      state.order.users = state.order.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user,
      );
    },

    clearOrderInfo: () => initialState,
  },
});

export const {
  editOrderInfo,
  clearOrderInfo,
  // deletePassengerById,
  // addNewPassenger,
  editPassengerById,
} = newOrderSlice.actions;

export default newOrderSlice.reducer;
