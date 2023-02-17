import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOrder } from 'types/order';

import { getOrdersThunk, putOrderThunk } from './OrdersThunk';

interface IOrdersState {
  orders: IOrder[];
  isOrdersFetching: boolean;
}

const initialState: IOrdersState = {
  orders: [],
  isOrdersFetching: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(getOrdersThunk.rejected, (state) => {
      state.isOrdersFetching = false;
    });
    builder.addCase(
      getOrdersThunk.fulfilled,
      (state, action: PayloadAction<IOrder[]>) => {
        state.orders = action.payload;
        state.isOrdersFetching = false;
      },
    );

    builder.addCase(putOrderThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(putOrderThunk.rejected, (state) => {
      state.isOrdersFetching = false;
    });
    builder.addCase(
      putOrderThunk.fulfilled,
      (state, action: PayloadAction<IOrder>) => {
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order,
        );

        state.isOrdersFetching = false;
      },
    );
  },
});

export default ordersSlice.reducer;
