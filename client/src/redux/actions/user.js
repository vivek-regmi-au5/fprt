import axios from "axios";
import { setAlert } from "./../actions/alert";
import { ADD_USERS, DELETE_USER } from "./../types";

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:7878/people/${id}`);
      dispatch({
        type: DELETE_USER,
        payload: id,
      });

      dispatch(setAlert("User is deleted", "success"));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:7878/people`);
      console.log("users: ", res);

      dispatch({
        type: ADD_USERS,
        payload: res,
      });
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
};
