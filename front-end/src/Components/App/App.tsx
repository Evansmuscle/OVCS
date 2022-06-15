import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import ForgotPassword from "../../Pages/ForgotPassword";
import Home from "../../Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
