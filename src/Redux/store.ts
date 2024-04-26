// store.ts

import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    // Other reducers if any
  },
});
