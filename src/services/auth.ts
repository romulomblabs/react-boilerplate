import { getInstance } from "~/utils";

const baseUrl = "/auth";

export const authApi = {
  login: async (email: string, password: string) => {
    const instance = getInstance();
    const { data } = await instance.post(baseUrl, { email, password });

    return data;
  },

  me: async () => {
    const instance = getInstance();
    const { data } = await instance.get(`${baseUrl}/me`);

    return data;
  },
};
