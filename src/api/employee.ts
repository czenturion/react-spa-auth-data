import { instance } from "./api";

const getDataUrl = '/ru/data/v3/testmethods/docs/userdocs/get'
const authToken = localStorage.getItem('token');

instance.defaults.headers.common['x-auth'] = authToken;

export const DataAPI = {
  getData: () => {
    return instance.get(getDataUrl)
      .then(res => res.data);
  }
}
