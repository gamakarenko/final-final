import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../api';
import { TAppDispatch } from '../store';

interface IUserState {
  transfers: any;
  transfer: any;
  isLoading: boolean;
  errors: string;
  isAirport: boolean;
  form: number;
  form2: number;
  summ: number;
}

const initialState: IUserState = {
  transfers: [],
  transfer: {},
  isAirport: false,
  isLoading: true,
  errors: '',
  form: 1,
  form2: 1,
  summ: 0
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

export const editTransfer = (id:any, obj: any) => async (dispatch: TAppDispatch) => {
  try {
    await $api.post(`/api/user/transfer/${id}`, obj)
  } catch (e) {
    console.log(e)
  }
}


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
    },
    summ(state) {
      state.summ = state.form + state.form2
    },
    addPassengers(state,action: PayloadAction<any>) {
      state.transfer = {...state.transfer, ...action.payload}
    }
  },
});
export const { fromAirport , summ, addPassengers} = transfersSlice.actions;

export default transfersSlice.reducer;
