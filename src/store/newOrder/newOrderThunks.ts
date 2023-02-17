import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrder } from '../../api/orders';
import { INewOrder } from '../../types/order';

export const createOrderThunk = createAsyncThunk(
  'newOrder/createOrderThunk',
  async (order: INewOrder) => {
    const res = await createOrder(order);
  },
);
