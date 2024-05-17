import { instance } from "./api";
import { ErrorOption, UseFormSetError } from "react-hook-form";

const loginURL: string = '/ru/data/v3/testmethods/docs/login';

export type LoginFormData = {
  username: string
  password: string
  authFailed?: boolean
}

// 2004: deny,

export const AuthAPI = {
  auth: async function (loginData: LoginFormData, setError: UseFormSetError<LoginFormData>) {
    try {
      const { data } = await instance.post(loginURL, loginData);
      console.log(data);
      if (data.error_code === 0) {
        return data;
      } else {
        setError("authFailed", data.error_text);
      }
    } catch (er) {
      console.log(er);
      throw er
    }
  },
}