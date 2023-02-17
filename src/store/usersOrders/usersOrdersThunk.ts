import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUsersOrders, putUsersOrder } from 'api/usersOrders';
import { IOrder } from 'types/order';

export const getUsersOrdersThunk = createAsyncThunk(
  'usersOrders/getUsersOrdersThunk',
  async () => {
    return await getUsersOrders();
  },
);

export const putUsersOrderThunk = createAsyncThunk(
  'usersOrders/putUsersOrderThunk',
  async (order: IOrder) => {
    return await putUsersOrder(order);
  },
);
