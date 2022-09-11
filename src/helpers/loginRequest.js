import axios from "axios";

export const loginRequest = async (uri, data) => {
  try {
    const resp = await axios.post(uri, data, {
      "Content-Type": "application/json",
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};
