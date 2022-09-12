import React from "react";
import { TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { useForm } from "../../hooks/useForm";
import { loginRequest } from "../../helpers/loginRequest";

const LoginScreen = () => {
  const [values, validate, handleInputChange, validateAll] = useForm({
    values: { email: "", password: "" },
    validate: { msgEmail: "", msgPassword: "" },
  });
  const { email, password } = values;
  const {msgEmail , msgPassword} = validate
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (isValid) {
      console.log("the for is valid");
      console.log(values);
      // loginRequest("http://192.168.1.4:3000/auth/login", {}).then((data) => {
      //   console.log(data);
      // });
    }
  };
  return (
    <div className="auth_box">
      <form onSubmit={handleOnSubmit}>
        <div>
        <TextField
          error = {msgEmail !==''}
          id="standard-basic"
          type="email"
          name="email"
          value={email}
          label={msgEmail ? msgEmail: 'Email'}
          variant="standard"
          onChange={handleInputChange}
        />
        </div>
        <div>
        <TextField
        error = {msgPassword !== ''}
          id="standard-basic"
          type="password"
          name="password"
          value={password}
          label={msgPassword ? msgPassword: '*************'}
          variant="standard"
          onChange={handleInputChange}
        />
        </div>
        

        <div>
        <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
          Login
        </Button>
        </div>
       
      
      </form>
    </div>
  );
};

export default LoginScreen;
