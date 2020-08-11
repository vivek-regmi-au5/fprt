import axios from "axios";
import { setAlert } from "./../actions/alert";
import { DELETE_PRODUCT, ADD_PRODUCTS } from "./../types";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/product`);
      console.log("products: ", res);
      dispatch({
        type: ADD_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/product`, data);
      console.log("product: ", res);
      dispatch(setAlert("Product successfully added", "success"));
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/product/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });

      dispatch(setAlert("Product is deleted", "success"));
    } catch (err) {
      console.log(err);
    }
  };
};
