import axios from "axios";
import { setAlert } from "./../actions/alert";

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:7878/product`, data);
      console.log("product: ", res);
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};
