import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginData: {
    Email: '',
    Password: '',
    isLoggedIn: false,
  },
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      const { Email, Password } = action.payload;
      state.loginData.Email = Email;
      state.loginData.Password = Password;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.loginData = { userName: '', token: '' };
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
