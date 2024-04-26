import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },

    resetAuthState: state => {
      state.accessToken = '';
      state.isAuthenticated = false;
    },
  },
});

export const {setAccessToken, resetAuthState} = authSlice.actions;

export const selectAccessToken = (state: {auth: AuthState}) =>
  state.auth.accessToken;
export const selectIsAuthenticated = (state: {auth: AuthState}) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
