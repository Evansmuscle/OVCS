import axios, { AxiosResponse } from "axios";
import create from "zustand";

interface State {
  signup: (values: {
    email: string;
    password: string;
  }) => Promise<User | { message: string }>;

  login: (values: {
    email: string;
    password: string;
  }) => Promise<{ access_token: string } | { message: string }>;
}

const useStore = create<State>((set) => ({
  signup: async (values) => {
    const { data }: AxiosResponse<User | { message: string }> =
      await axios.post("http://localhost:3001/users/signup", values);

    return data;
  },

  login: async (values) => {
    const {
      data,
    }: AxiosResponse<{ access_token: string } | { message: string }> =
      await axios.post("http://localhost:3001/auth/login", values);

    return data;
  },
}));

export default useStore;
