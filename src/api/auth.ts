import {instance} from "./api";

const loginURL: string = '/ru/data/v3/testmethods/docs/login';

export type LoginFormData = {
  username: string
  password: string
}

export const AuthAPI = {
  auth(loginData: LoginFormData) {
    return instance.post(loginURL, loginData)
      .then(res => res.data)
      .catch(er => {
        console.log(er)
        throw er;
      })
  }
}