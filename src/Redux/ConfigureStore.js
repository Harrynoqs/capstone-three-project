import { configureStore } from '@reduxjs/toolkit';
import crypto from './STORE/cryptoSlice';

const Store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default Store;
