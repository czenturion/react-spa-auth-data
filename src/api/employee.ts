import { instance } from "./api";

const getDataUrl = '/ru/data/v3/testmethods/docs/userdocs/get'

const DataAPI = {
  getData: () => {
    return instance.get(getDataUrl, )
  }
}
