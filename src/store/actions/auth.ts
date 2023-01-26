import { Dispatch } from "redux";

import Auth from "../repositories/auth";

interface LoginStartAction {
  type: "LOGIN_START";
}

interface LoginSuccessAction {
  type: "LOGIN_SUCCESS";
  payload: string;
}

interface LoginErrorAction {
  type: "LOGIN_ERROR";
  payload: string;
}

interface RegisterStartAction {
  type: "REGISTER_START";
}

interface RegisterSuccessAction {
  type: "REGISTER_SUCCESS";
  payload: string;
}

interface RegisterErrorAction {
  type: "REGISTER_ERROR";
  payload: string;
}

export const loginStart = (): LoginStartAction => ({
  type: "LOGIN_START",
});

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: "LOGIN_SUCCESS",
  payload: token,
});

export const loginError = (error: string): LoginErrorAction => ({
  type: "LOGIN_ERROR",
  payload: error,
});

export const registerStart = (): RegisterStartAction => ({
  type: "REGISTER_START",
});

export const registerSuccess = (token: string): RegisterSuccessAction => ({
  type: "REGISTER_SUCCESS",
  payload: token,
});

export const registerError = (error: string): RegisterErrorAction => ({
  type: "REGISTER_ERROR",
  payload: error,
});

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginStart());
    try {
      const { token } = await Auth.login(email, password);
      dispatch(loginSuccess(token));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loginError(error.message));
      }
    }
  };
};

export const register = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(registerStart());
    try {
      const { token } = await Auth.register(email, password);
      dispatch(registerSuccess(token));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(registerError(error.message));
      }
    }
  };
};
