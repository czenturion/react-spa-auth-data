import { instance } from "./api";
import { UseFormSetError } from "react-hook-form";

const loginURL: string = '/ru/data/v3/testmethods/docs/login';

export type LoginFormDataT = {
  username: string
  password: string
  authFailed?: boolean
}

export type simpleResponseObjectT = {
  error_code: number
  error_message: string
}

type authResponseDataT = simpleResponseObjectT & {
  data: { token: string }
}

// 2004: deny,

export const AuthAPI = {
  auth: (loginData: LoginFormDataT) => {
    return instance.post<authResponseDataT>(loginURL, loginData)
      .then(res => res.data);
  },
}

export const AuthRequest = async (loginData: LoginFormDataT, setError: UseFormSetError<LoginFormDataT>) => {
  try {
    const res = await AuthAPI.auth(loginData);

    if (res.error_code === 0) {
      return res.data;
    } else {
      setError("authFailed", {type: 'authFailed', message: 'Логин или Пароль введены не верно.'});
    }
  } catch (er) {
    console.log(er);
    throw er;
  }
}
