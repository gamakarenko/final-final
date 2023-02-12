import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from '../../types/order';

//TODO Добавить передачу order в async, и формировать ее извне
export const createOrderThunk = createAsyncThunk('order/createOrderThunk', async (order: IOrder) => {
  // const res = await createTransfer(order);
  const res = 'create transfer DONE';
  console.log('createTransferThunk', { order });
});
