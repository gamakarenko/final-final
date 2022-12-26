import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import $api from '../../api';
import { TAppDispatch } from '../store';

interface IUserState {
  users: any;
  isLoading: boolean;
  errors: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: true,
  errors: '',
};


export const createTransfer = (obj : any) => async (dispatch: TAppDispatch) => {
  try {
    await $api.post(`/transfers/create-transfer`, obj);
  } catch (e) {
    console.log(e)
  }
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUserState>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },
    usersDelete(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user: any) => user.id !== action.payload);
    },
  },
});

export default usersSlice.reducer;