import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInstance } from "src/utils";

interface LoginData {
  email: string;
  password: string;
}

export const auth = createAsyncThunk(
  "auth/auth",
  async (credentials: LoginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const instance = getInstance();
      const response = await instance.post("/auth", credentials);
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
