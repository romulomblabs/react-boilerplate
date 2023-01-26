import axios from "axios";

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
};

const register = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/register", { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default {
  login,
  register,
};
