import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:5000";

interface LoginData {
  primaryDocument: string;
  password: string;
}

export const auth = createAsyncThunk(
  "auth/auth",
  async (credentials: LoginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`${backendURL}/auth`, credentials);
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
