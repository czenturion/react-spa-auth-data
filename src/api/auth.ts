import { instance } from "./api";
import { UseFormSetError } from "react-hook-form";
import {Dispatch} from "@reduxjs/toolkit";
import {isLoading} from "../store/dataSlice";

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


export const AuthAPI = {
  auth: (loginData: LoginFormDataT) => {
    return instance.post<authResponseDataT>(loginURL, loginData)
      .then(res => res.data);
  },
}

export const AuthRequest = async (loginData: LoginFormDataT, setError: UseFormSetError<LoginFormDataT>, dispatch: Dispatch) => {
  try {
    dispatch(isLoading(true));
    const encodedData = {
      username: encodeURI(loginData.username),
      password: encodeURI(loginData.password)
    }
    const res = await AuthAPI.auth(encodedData);

    if (res.error_code === 0) {
      return res.data;
    } else {
      setError("authFailed", {type: 'authFailed', message: 'Логин или Пароль введены не верно.'});
      dispatch(isLoading(false));
    }
  } catch (er) {
    dispatch(isLoading(false));
    console.log(er);
    throw er;
  }
}
