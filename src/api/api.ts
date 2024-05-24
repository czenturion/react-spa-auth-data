import axios from "axios";
import { APIUrl } from "@/shared/consts";


export const instance = axios.create({
  baseURL: APIUrl.HOST,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
