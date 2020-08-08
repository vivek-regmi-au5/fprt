import axios from "axios";
import { setAlert } from "./alert";
import { PEOPLE_SIGNUP } from "./../types";

export const signupFormSubmit = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:7878/people/signup", data);
      console.log("res at profileme: ", res);
      dispatch({
        type: PEOPLE_SIGNUP,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};
