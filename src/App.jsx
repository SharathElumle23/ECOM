import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Comonents/authentication/LoginPage';
import Signup from './Comonents/authentication/Signup';
import LandingPage from './Comonents/MainPage/LandingPage';
import CartSection from './Comonents/MainPage/Cart';
function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage setLogin={setLogin} />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
