import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  crypto: [],
  status: '',
};

const FETCH_CRYPTOS = 'redux/FETCH_CRYPTOS';

export const FetchCryptoApi = createAsyncThunk(
  FETCH_CRYPTOS,
  async (thunkAPI) => {
    try {
      const getApi = await axios.get('https://api.coincap.io/v2/assets');
      return getApi.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

const CryptoSlice = createSlice({
  name: 'cryptoReducer',
  initialState,
  reducers: {},
  extraReducers: {

    [FetchCryptoApi.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loading';
    },

    [FetchCryptoApi.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'success';
      // eslint-disable-next-line no-param-reassign
      state.cryptos = [
        ...state.crypto, action.payload.data.filter((i) => i.rank <= 8),
      ];
    },

    [FetchCryptoApi.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'failure';
    },
  },
});

export default CryptoSlice.reducer;
