import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  token: localStorage.getItem('token') as string | null,
  isAuth: !!localStorage.getItem('token') as boolean,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      state.isAuth = true;
    },
    removeToken(state) {
      state.token = null;
      localStorage.removeItem('token');
      state.isAuth = false;
    }
  },
})


export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;