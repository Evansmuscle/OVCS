import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Signup from "../../Pages/Signup";
import Login from "../../Pages/Login";
import ForgotPassword from "../../Pages/ForgotPassword";
import Home from "../../Pages/Home";
import Books from "../../Pages/Books";
import Games from "../../Pages/Games";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/games" element={<Games />} />
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
