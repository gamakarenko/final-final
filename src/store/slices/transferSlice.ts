import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

interface IUserState {
  transfers: any;
  isLoading: boolean;
  errors: string;
  isAirport: boolean;
}

const initialState: IUserState = {
  transfers: [],
  isAirport: false,
  isLoading: true,
  errors: '',
};

export const fetchTransfers = (id:any) => async (dispatch: TAppDispatch) => {
  try {
    // fetch('https://tg-bot-teal.vercel.app/api/user/get/1').then((res) => res.json()).then((res) => {
    // let kek = res
    const { data } = await $api.get(`/api/user/transfers/${id}`);
    dispatch(transfersSlice.actions.transfersFetchingSuccess(data));
  } catch (e) {
    console.log(e);
  }
};

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    transfersFetchingSuccess(state, action: PayloadAction<IUserState>) {
      state.isLoading = false;
      state.transfers = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },
    fromAirport(state, action: PayloadAction<boolean>) {
      state.isAirport = action.payload;
    },
  },
});
export const { fromAirport } = transfersSlice.actions;

export default transfersSlice.reducer;
