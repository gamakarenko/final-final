import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { IOrder } from 'types/order';

import { createOrderThunk, getOrdersThunk, putOrderThunk } from './OrdersThunk';

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

      toast.error('Ошибка загрузки поездок.');
    });
    builder.addCase(
      getOrdersThunk.fulfilled,
      (state, action: PayloadAction<IOrder[]>) => {
        state.orders = action.payload;

        state.orders.sort((a, b) => b.id! - a.id!);

        state.isOrdersFetching = false;
      },
    );

    builder.addCase(createOrderThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(createOrderThunk.rejected, (state) => {
      state.isOrdersFetching = false;
      toast.error('Не удалось создать поездку. Попробуйте позже.');
    });
    builder.addCase(createOrderThunk.fulfilled, (state, action) => {
      state.orders.unshift(action.payload as unknown as IOrder);
      state.isOrdersFetching = false;
    });

    builder.addCase(putOrderThunk.pending, (state) => {
      state.isOrdersFetching = true;
    });
    builder.addCase(putOrderThunk.rejected, (state) => {
      state.isOrdersFetching = false;
      toast.error('Не удалось изменить поездку. Попробуйте позже.');
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
