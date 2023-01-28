import Axios, { AxiosInstance } from "axios";
import { Constants } from "src/config";

const axiosInstance = Axios.create({
  baseURL: Constants.backUrl,
  headers: {
    "Content-Type": "application/json",
    mode: "cors",
  },
});

export const getInstance = (): AxiosInstance => {
  return axiosInstance;
};

export const setAuthorizationHeader = (token: string): void => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};
