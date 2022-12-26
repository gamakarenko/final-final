import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
  }),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

const useAppSelector = <T>(selector: (state: TRootState) => T) => useSelector(selector);
const useAppDispatch: () => TAppDispatch = useDispatch;

export { store, useAppSelector, useAppDispatch };
export type { TRootState, TAppDispatch };