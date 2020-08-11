import axios from "axios";
import { setAlert } from "./alert";
import {
  PEOPLE_SIGNUP,
  CLEAN_UP,
  PEOPLE_SIGNIN,
  ADMIN_LOGIN,
} from "./../types";

export const signupFormSubmit = (data) => {
  return async (dispatch, props) => {
    try {
      const res = await axios.post("/people/signup", data);
      console.log("res at profileme: ", res);
      dispatch({
        type: CLEAN_UP,
      });
      dispatch({
        type: PEOPLE_SIGNUP,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};

export const signinFormSubmit = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/people/signin", data);
      console.log("res at signin: ", res);
      dispatch({
        type: CLEAN_UP,
      });
      dispatch({
        type: PEOPLE_SIGNIN,
        payload: res,
      });
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAN_UP,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const adminFormSubmit = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/people/signin", data);
      console.log("res at signin: ", res);
      dispatch({
        type: CLEAN_UP,
      });
      dispatch({
        type: ADMIN_LOGIN,
      });

      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};
