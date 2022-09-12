import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingScreen from "../components/LandingScreen";
import AdminRoutes from "./AdminRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route
          path="*"
          element={<LandingScreen/>}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
