import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import transferSlice from './slices/transferSlice';
import userSlice from './slices/userSlice';
import order from './order/order';
import usersOrders from './usersOrders/usersOrders';

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
    transfers: transferSlice,
    order,
    usersOrders,
  }),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

// const useAppSelector = <T>(selector: (state: TRootState) => T) => useSelector(selector);
// const useAppDispatch: () => TAppDispatch = useDispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export type { TRootState, TAppDispatch };
