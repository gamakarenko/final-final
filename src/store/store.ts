import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import transferSlice from './slices/transferSlice';
import userSlice from './slices/userSlice';
import order from './order/order';
import usersOrders from './usersOrders/usersOrders';

const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
    transfers: transferSlice,
    order,
    usersOrders,
  }),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

const useAppSelector = <T>(selector: (state: TRootState) => T) => useSelector(selector);
const useAppDispatch: () => TAppDispatch = useDispatch;

export { store, useAppSelector, useAppDispatch };
export type { TRootState, TAppDispatch };
