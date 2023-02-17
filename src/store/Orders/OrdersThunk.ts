import { createAsyncThunk } from '@reduxjs/toolkit';

import { getOrders, putOrder } from 'api/orders';
import { IOrder } from 'types/order';

export const getOrdersThunk = createAsyncThunk(
  'orders/getOrdersThunk',
  async () => {
    return await getOrders();
  },
);

export const putOrderThunk = createAsyncThunk(
  'orders/putOrderThunk',
  async (order: IOrder) => {
    return await putOrder(order);
  },
);
