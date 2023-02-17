import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrder } from '../../api/order';
import { IOrder } from '../../types/order';

export const createOrderThunk = createAsyncThunk(
  'order/createOrderThunk',
  async (order: IOrder) => {
    const res = await createOrder(order);
  },
);
