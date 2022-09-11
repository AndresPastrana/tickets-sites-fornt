import React from "react";
import { TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { useForm } from "../../hooks/useForm";
import { signUpRequest } from "../../helpers/signUpRequest";

const SignUpScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    name: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const { email, name, lastName, phone, password } = formValues;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    signUpRequest("http://192.168.1.4:3000/auth/signUp", formValues)
      .then((data) => {
        console.log(data);
      })
  };
  return (
    <div className="auth_box">
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="standard-basic"
          type="text"
          name="name"
          value={name}
          label="Name: "
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          type="text"
          name="lastName"
          value={lastName}
          label="Last name"
          variant="standard"
          onChange={handleInputChange}
        />
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
          type="number"
          name="phone"
          value={phone}
          label="Phone Number"
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpScreen;
