import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import transferSlice from './slices/transferSlice';
import userSlice from './slices/userSlice';
import newOrder from './newOrder/newOrder';
import orders from './Orders/Orders';

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
    transfers: transferSlice,
    newOrder,
    orders,
  }),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export type { TRootState, TAppDispatch };
