/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "src/services";

interface LoginData {
  email: string;
  password: string;
}

export const auth = createAsyncThunk(
  "auth/auth",
  async (credentials: LoginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { email, password } = credentials;
    try {
      const response = await authApi.login(email, password);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      return true;
    } catch (error: any) {
      const { stack, message } = error;
      return rejectWithValue({ stack, message });
    }
  }
);
