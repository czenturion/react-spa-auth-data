import { createSlice } from '@reduxjs/toolkit';

export type employeeT = {
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
  id: string
}

const initialState = {
  employees: [] as employeeT[] | null,
}

export const dataSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    removeEmployees(state) {
      state.employees = null;
    }
  },
})


export const {
  setEmployees,
  removeEmployees
} = dataSlice.actions;

export default dataSlice.reducer;