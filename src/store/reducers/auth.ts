import { Reducer } from "redux";

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
    case "REGISTER_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return { ...state, token: action.payload, loading: false };
    case "LOGIN_ERROR":
    case "REGISTER_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
