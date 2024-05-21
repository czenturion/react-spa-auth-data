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
  selectedEmployee: {} as employeeT,
  isEditMode: false as boolean,
  isLoading: false as boolean,
}

export const dataSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    addEmployee(state, action) {
      if (state.employees !== null) {
        state.employees = [...state.employees, action.payload.data]
      } else {
        state.employees = action.payload.data;
      }
    },
    modifyEmployee(state, action) {
      if (state.employees !== null) {
        state.employees = state.employees.map(emp => {
          if (emp.id === action.payload.id) {
            return action.payload;
          } else {
            return emp;
          }
        })
      }
    },
    deleteEmployee(state, action) {
      if (state.employees) {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      }
    },
    selectedEmployee(state, action) {
      state.selectedEmployee = action.payload;
    },
    isEditMode(state, action) {
      state.isEditMode = action.payload;
    },
    removeEmployees(state) {
      state.employees = null;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
})


export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
  modifyEmployee,
  selectedEmployee,
  isEditMode,
  removeEmployees,
  isLoading
} = dataSlice.actions;

export default dataSlice.reducer;