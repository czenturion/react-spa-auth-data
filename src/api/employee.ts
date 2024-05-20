import { instance } from "./api";
import {addEmployee, deleteEmployee, setEmployees, employeeT, modifyEmployee} from "../store/dataSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { APIUrl } from "../consts/consts";


export const DataAPI = {
  getData: () => {
    return instance.get(APIUrl.getData)
      .then(res => res.data);
  },
  createEmployeeDoc: (emp: employeeT) => {
    return instance.post(APIUrl.addEmployee, emp)
      .then(res => res.data);
  },
  deleteEmployeeDoc: (id: string) => {
    return instance.post(APIUrl.deleteEmployee + id)
      .then(res => console.log(res));
  },
  modifyEmployeeDoc: (id: string, emp: employeeT) => {
    return instance.post(APIUrl.modifyEmployee + id, emp)
      .then(res => res.data);
  }
}

export const DataRequest = (token: string | null, dispatch: Dispatch) => {
  instance.defaults.headers.common['x-auth'] = token;
  DataAPI.getData().then(res => {
    dispatch(setEmployees(res.data));
  });
}

export const CreateEmployee = (emp: employeeT, dispatch: Dispatch) => {
  emp.companySigDate = emp.employeeSigDate = new Date().toISOString();
  DataAPI.createEmployeeDoc(emp).then(res => {
    dispatch(addEmployee(res));
  })
}

export const DeleteEmployee = (id: string, dispatch: Dispatch) => {
  DataAPI.deleteEmployeeDoc(id).then(res => {
    dispatch(deleteEmployee(id));
  })
}

export const ModifyEmployee = (id: string, emp: employeeT, dispatch: Dispatch) => {
  DataAPI.modifyEmployeeDoc(id, emp).then(res => {
    dispatch(modifyEmployee(emp))
  })
}