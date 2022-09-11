import React from "react";
import { TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { useForm } from "../../hooks/useForm";
import { loginRequest } from "../../helpers/loginRequest";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    name: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const { email,password } = formValues;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    loginRequest("http://192.168.1.4:3000/auth/login", formValues)
      .then((data) => {
        console.log(data);
      })
  };
  return (
    <div className="auth_box">
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="standard-basic"
          type="email"
          name="email"
          value={email}
          label="Email"
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          type="password"
          name="password"
          value={password}
          label="********"
          variant="standard"
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit" endIcon={<LoginIcon /> }>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginScreen;
