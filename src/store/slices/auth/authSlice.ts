/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { auth } from "./authAsyncActions";

interface LoginState {
  loading: boolean;
  userInfo: object | null;
  error: any | null;
  userToken: string | null;
  isAuthenticated: boolean;
  success: boolean;
}

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
  isAuthenticated: false,
} as LoginState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state: LoginState,
      action: PayloadAction<{ token: string; user: object }>
    ) => {
      state.userToken = action.payload.token;
      state.userInfo = action.payload.user;
      state.isAuthenticated = true;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action: PayloadAction<{ token: string; user: object }>) => {
      state.userToken = action.payload.token;
      state.userInfo = action.payload.user;
      state.isAuthenticated = true;
    },
    registerError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logoutSuccess: state => {
      state.userToken = null;
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(auth.pending, state => {
        state.loading = true;
      })
      .addCase(auth.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.userToken = action.payload;
      })
      .addCase(auth.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { loginSuccess, loginError, registerSuccess, registerError, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
