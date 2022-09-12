import React from "react";
import { Routes, Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div className="__admin_conatiner">
      <Routes>
        <Route path="/" element={<h1>Admin View</h1>} />
        {/* <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="*" element={<h1>no match router Auth</h1>} /> */}
      </Routes>
    </div>
  );
};

export default AdminRoutes;
