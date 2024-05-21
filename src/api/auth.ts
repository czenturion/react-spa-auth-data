import { instance } from "./api";
import { APIUrl } from "../shared/consts/consts";
import { Dispatch } from "@reduxjs/toolkit";
import { isLoading } from "../store/dataSlice";
import { UseFormSetError } from "react-hook-form";
import { authResponseDataT, LoginFormDataT } from "../types/types";


export const AuthAPI = {
  auth: (loginData: LoginFormDataT) => {
    return instance.post<authResponseDataT>(APIUrl.login, loginData)
      .then(res => res.data);
  },
}

export const AuthRequest = async (
  loginData: LoginFormDataT,
  setError: UseFormSetError<LoginFormDataT>,
  dispatch: Dispatch
) => {
  try {
    dispatch(isLoading(true));

    const encodedLoginData = {
      username: encodeURI(loginData.username),
      password: encodeURI(loginData.password),
    }

    const res = await AuthAPI.auth(encodedLoginData);

    if (res.error_code === 0) {
      return res.data;
    } else {
      setError("authFailed", {
        type: 'authFailed',
        message: 'Логин или Пароль введены не верно.'
      });
    }

  } catch (er) {
    console.log(er);
    throw er;

  } finally {
    dispatch(isLoading(false));
  }
}
