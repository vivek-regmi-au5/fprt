import axios from "axios";
import { GET_BRANDS } from "./../types";

export const getBrands = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:7878/brand`);
      console.log("brands: ", res);

      dispatch({
        type: GET_BRANDS,
        payload: res,
      });
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
};
