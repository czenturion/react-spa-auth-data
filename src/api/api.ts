import axios from "axios";
import { APIUrl } from "../consts/consts";


export const instance = axios.create({
  baseURL: APIUrl.HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});
