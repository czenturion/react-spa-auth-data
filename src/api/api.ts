import axios from "axios";

const HOST: string = 'https://test.v5.pryaniky.com';

export const instance = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});