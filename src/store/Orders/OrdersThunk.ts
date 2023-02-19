import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrder, getOrders, putOrder } from 'api/orders';

import { IOrder } from 'types/order';

export const getOrdersThunk = createAsyncThunk(
  'orders/getOrdersThunk',
  async () => {
    return await getOrders();
  },
);

export const createOrderThunk = createAsyncThunk(
  'orders/createOrderThunk',
  async (order: IOrder) => {
    return await createOrder(order);
  },
);

export const putOrderThunk = createAsyncThunk(
  'orders/putOrderThunk',
  async (order: IOrder) => {
    return await putOrder(order);
  },
);
