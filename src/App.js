import React from "react";
import LoginScreen from "./components/auth/LoginScreen";
import { BrowserRouter } from "react-router-dom";
import SignUpScreen from "./components/auth/SignUpScreen";
// import { BrowserRouter } from 'react-router-dom'
// import AppRoutes from './routes/AppRoutes'

import "./styles/styles.scss";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  // eslint-disable-next-line no-lone-blocks
  return (
    <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;
