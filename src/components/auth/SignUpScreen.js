import React from "react";
import { TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { useForm } from "../../hooks/useForm";
import { signUpRequest } from "../../helpers/signUpRequest";

const SignUpScreen = () => {
  const [values, validate, handleInputChange, validateAll] = useForm({
    values: { name: "", lastName: "", phone: "", email: "", password: "" },
    validate: {
      msgName: "",
      msgLastName: "",
      msgEmail: "",
      msgPhone: "",
      msgPassword: "",
    },
  });
  const { name, lastName, email, phone, password } = values;
  const { msgName, msgLastName, msgEmail, msgPhone, msgPassword } = validate;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (validateAll()) {
      console.log("Valid form");
    } else {
      console.log("Not a Valid form");
    }

    // signUpRequest("http://192.168.1.4:3000/auth/signUp", formValues)
    //   .then((data) => {
    //     console.log(data);
    //   })
  };
  return (
    <div className="auth_box">
      <form onSubmit={handleOnSubmit}>
        <TextField
          error={msgName !== ""}
          label={msgName ? msgName : "Name: "}
          id="standard-basic"
          type="text"
          name="name"
          value={name}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          error={msgLastName !== ""}
          label={msgLastName ? msgLastName : "last name: "}
          id="standard-basic"
          type="text"
          name="lastName"
          value={lastName}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          error={msgEmail !== ""}
          label={msgEmail ? msgEmail : "Email"}
          id="standard-basic"
          type="email"
          name="email"
          value={email}
          variant="standard"
          onChange={handleInputChange}
        />

        <TextField
        error = {msgPhone !== ''}
        label={msgPhone? msgPhone: "Phone Number:"}
          id="standard-basic"
          type="number"
          name="phone"
          value={phone}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          error={msgPassword !== ""}
          label={msgPassword ? msgPassword : "*************"}
          id="standard-basic"
          type="password"
          name="password"
          value={password}
          variant="standard"
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit" endIcon={<LoginIcon />}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpScreen;
