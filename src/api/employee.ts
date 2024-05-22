import { instance } from "./api";
import {
  addEmployee,
  deleteEmployee,
  setEmployees,
  modifyEmployee,
  isLoading,
} from "../store/dataSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { APIUrl } from "../shared/consts";
import { dataT, employeeT, modifyEmployT, simpleResponseObjectT } from "../types/types";


export const DataAPI = {
  getData: () => {
    return instance.get<dataT>(APIUrl.getData)
      .then(res => res.data);
  },
  createEmployeeDoc: (emp: employeeT) => {
    return instance.post<employeeT>(APIUrl.addEmployee, emp)
      .then(res => res.data);
  },
  deleteEmployeeDoc: (id: string) => {
    return instance.post<simpleResponseObjectT>(APIUrl.deleteEmployee + id);
  },
  modifyEmployeeDoc: (id: string, emp: employeeT) => {
    return instance.post<modifyEmployT>(APIUrl.modifyEmployee + id, emp)
      .then(res => res.data);
  }
}

export const DataRequest = (token: string | null, dispatch: Dispatch) => {
  instance.defaults.headers.common['x-auth'] = token;

  DataAPI.getData()
    .then(res => {
      dispatch(setEmployees(res.data));
    })
    .catch(er => {
      console.log(er);
    })
    .finally(() => {
      dispatch(isLoading(false));
    });
}

export const CreateEmployee = (emp: employeeT, dispatch: Dispatch) => {
  emp.companySigDate = emp.employeeSigDate = new Date().toISOString();

  DataAPI.createEmployeeDoc(emp)
    .then(res => {
      dispatch(addEmployee(res));
    });
}

export const DeleteEmployee = (id: string, dispatch: Dispatch) => {
  dispatch(deleteEmployee(id));
  DataAPI.deleteEmployeeDoc(id);
}

export const ModifyEmployee = (emp: employeeT, dispatch: Dispatch) => {
  dispatch(modifyEmployee(emp));
  DataAPI.modifyEmployeeDoc(emp.id, emp);
}