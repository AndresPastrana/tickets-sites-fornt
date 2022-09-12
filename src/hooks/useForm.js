import { useState } from "react";
import validator from "validator";

export const useForm = (initialState = {}) => {
  const [formState, setformState] = useState(initialState);
  const { values, validate } = formState;

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    return setformState({
      values: {
        ...values,
        [name]: value,
      },
      validate: { ...validate },
    });
  };

  const validateAll = () => {
    let isValid = true;

    const {
      name = "default",
      lastName = "default",
      phone = '12345',
      email,
      password,
    } = values;

    let validations = {
      msgName: "",
      msgLastName: "",
      msgEmail: "",
      msgPhone: "",
      msgPassword: "",
    };

    // Login and Register validations
    if (!validator.isEmail(email) || validator.isEmpty(email)) {
         validations.msgEmail = "Invalid Email ";
         isValid = isValid && false;
    }

    if (!validator.isStrongPassword(password)) {
      console.log(password);
      console.log(typeof password);
      validations.msgPassword = "Invalid password";
      isValid = isValid && false;
    }

    //Only regsiter Screen validations
    if (validator.isEmpty(name) || typeof name !== "string") {
      isValid = isValid && false;
      validations.msgName = "Not a valid name ";
    }

    if (validator.isEmpty(lastName) || typeof lastName !== "string") {
      isValid = isValid && false;
      validations.msgLastName = "Not a valid Last name ";
    }

    if (validator.isEmpty(phone) || Number.isNaN(Number(phone))) {
      isValid = isValid && false;
      validations.msgPhone = "Not a valid number";
    }

    // Si the data is invalid set the errors in the new state
    if (!isValid) {
      console.log("Not valid !!!!!!");
      setformState({
        values: {
          ...values,
        },
        validate: {
          ...validations,
        },
      });
    } else {
      // Remove Errors
      setformState({
        values: {
          ...values,
        },
        validate: {
          msgName: "",
          msgLastName: "",
          msgEmail: "",
          msgPhone: "",
          msgPassword: "",
        },
      });
    }

    return isValid;
  };

  return [values, validate, handleInputChange, validateAll];
};
