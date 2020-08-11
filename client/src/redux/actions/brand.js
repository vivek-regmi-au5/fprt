import axios from "axios";
import { GET_BRANDS, DELETE_BRAND } from "./../types";
import { setAlert } from "./../actions/alert";

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

export const deleteBrand = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:7878/brand/${id}`);
      dispatch({
        type: DELETE_BRAND,
        payload: id,
      });

      dispatch(setAlert("Brand is deleted", "success"));
    } catch (err) {
      console.log(err);
    }
  };
};
