import axios from "axios";
import { GET_CATEGORIES, CLEAR_CATEGORIES } from "./../types";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/category`);
      console.log("categories: ", res);

      dispatch({
        type: CLEAR_CATEGORIES,
      });
      dispatch({
        type: GET_CATEGORIES,
        payload: res,
      });
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
};
