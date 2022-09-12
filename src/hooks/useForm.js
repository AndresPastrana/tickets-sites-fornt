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

    const { email, password } = values;
    let validations = { msgEmail: "", msgPassword: "" };

    if (!validator.isEmail(email) || validator.isEmpty(email)) {
      validations.msgEmail = "Invalid Email ";
      isValid = isValid && false;
    }

     
    if (!validator.isStrongPassword(password) ) {
        validations.msgPassword = "Invalid password";
        isValid = isValid && false;
      }
  


    // Si the data is invalid set the errors in the new state
    if (!isValid) {
        console.log('Not valid !!!!!!');
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
        validate: { msgEmail: "", msgPassword: "" },
      });
    }

    return isValid;
  };

  return [values, validate, handleInputChange, validateAll];
};
