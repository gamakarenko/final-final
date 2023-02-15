import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUsersOrders } from 'api/usersOrders';

export const getUsersOrdersThunk = createAsyncThunk(
  'order/getUsersOrdersThunk',
  async () => {
    return await getUsersOrders();
  },
);
