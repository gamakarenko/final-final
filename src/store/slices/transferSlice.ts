import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

interface IUserState {
  transfers: any;
  transfer: any;
  isLoading: boolean;
  errors: string;
  isAirport: boolean;
}

const initialState: IUserState = {
  transfers: [],
  transfer: {},
  isAirport: false,
  isLoading: true,
  errors: '',
};

export const fetchTransfers = (id:any) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(transfersSlice.actions.transfersFetching)
    const { data } = await $api.get(`/api/user/transfers/${id}`);
    dispatch(transfersSlice.actions.transfersFetchingSuccess(data));
  } catch (e) {
    console.log(e);
  }
};
export const fetchTransferById = (id:any) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(transfersSlice.actions.transfersFetching)
    const { data } = await $api.get(`/api/user/transfer/${id}`);
    dispatch(transfersSlice.actions.setTransfer(data));
  } catch (e) {
    console.log(e);
  }
};


const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    transfersFetching(state) {
      state.isLoading = true;
    },
    transfersFetchingSuccess(state, action: PayloadAction<IUserState>) {
      state.isLoading = false;
      state.transfers = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.errors = action.payload;
      state.isLoading = false;
    },
    fromAirport(state, action: PayloadAction<boolean>) {
      state.isAirport = action.payload;
    },
    setTransfer(state, action: PayloadAction<string>) {
      state.transfer = action.payload;
      state.isLoading = false;
    }
  },
});
export const { fromAirport } = transfersSlice.actions;

export default transfersSlice.reducer;
