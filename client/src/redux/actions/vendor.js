import axios from "axios";
import { SET_VENDOR_PRODUCTS } from "./../types";

export const getVendorProducts = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/product/${id}`);
      console.log("vendor products: ", res);

      dispatch({
        type: SET_VENDOR_PRODUCTS,
        payload: res,
      });
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
    }
  };
};
