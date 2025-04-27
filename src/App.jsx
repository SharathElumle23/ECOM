import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Comonents/authentication/LoginPage';
import Signup from './Comonents/authentication/Signup';
import LandingPage from './Comonents/MainPage/LandingPage';
import CartSection from './Comonents/MainPage/Cart';
import { useSelector } from 'react-redux';
function App() {
  const fetchLogin = useSelector(state => state.login.loginData);

  return (
    <BrowserRouter>
      <Routes>
        {!fetchLogin.isLoggedIn ? (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartSection />} />
            <Route path="*" element={<LandingPage />} />
          </>
        ) : (
          <>
            <Route path="/cart" element={<CartSection />} />
            <Route path="*" element={<LandingPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
