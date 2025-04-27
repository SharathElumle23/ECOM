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
    loginData: (state, action) => {
      const { Email, Password } = action.payload;
      state.loginData.Email = Email;
      state.loginData.Password = Password;
      state.loginData.isLoggedIn = true;
    },
    logout: state => {
      state.loginData = { userName: '', token: '' };
      state.isLoggedIn = false;
    },
  },
});

export const { loginData, logout } = loginSlice.actions;
export default loginSlice.reducer;
