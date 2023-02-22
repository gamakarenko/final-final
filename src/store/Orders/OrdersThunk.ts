import { createAsyncThunk } from '@reduxjs/toolkit';

import { createOrder, deleteOrder, getOrders, putOrder } from 'api/orders';

import { IOrder } from 'types/order';

export const getOrdersThunk = createAsyncThunk(
  'orders/getOrdersThunk',
  async () => {
    const res = await getOrders();
    return res.data;
  },
);

export const createOrderThunk = createAsyncThunk(
  'orders/createOrderThunk',
  async (order: IOrder) => {
    const res = await createOrder(order);
    return res.data.body;
  },
);

export const putOrderThunk = createAsyncThunk(
  'orders/putOrderThunk',
  async (order: IOrder) => {
    const res = await putOrder(order);
    return res.data;
  },
);

export const deleteOrderThunk = createAsyncThunk(
  'orders/deleteOrderThunk',
  async (order: IOrder) => {
    const res = await deleteOrder(order);
    return res.data;
  },
);
