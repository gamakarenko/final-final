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
  transfers: {
    "transferDate": "2022-02-21",
    "transferTime": "16:13",
    "pickYouUpFromAirPort": "true",
    "start": "",
    "end": "",
    "carType": "Vito",
    "adults": "3",
    "childrenUnder5": "2",
    "childrenAbove5": "2",
    "passengers": [
        {
            "fullName": "1111111111111111",
            "passportId": "1111111111",
            "phoneNumber": "111111111",
            "email": "111111111",
            "telegramId": "111111111",
            "transferComment": "1111111"
        }
    ]
},
  isAirport: false,
  isLoading: true,
  errors: '',
};


export const fetchTransfers = () => async (dispatch: TAppDispatch) => {
  try {
    const {data} = await $api.get(`/transfers/create-transfer`);
    dispatch(transfersSlice.actions.transfersFetchingSuccess(data))
  } catch (e) {
    console.log(e)
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
      state.isAirport = action.payload
    }
  },
});
export const {fromAirport} = transfersSlice.actions

export default transfersSlice.reducer;