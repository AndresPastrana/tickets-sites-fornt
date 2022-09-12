import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import SignUpScreen from "../components/auth/SignUpScreen";

const AuthRoutes = () => {
  return (
    <div className="__auth_conatiner">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signUp" element={<SignUpScreen />} />
        <Route path="*" element={<h1>no match router Auth</h1>} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
