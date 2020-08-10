import { SET_VENDOR_PRODUCTS } from "./../types";

const initialState = {
  products: null,
};

const vendorProductsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_VENDOR_PRODUCTS:
      return {
        ...state,
        products: payload.data.vendorProductsData,
      };

    default:
      return state;
  }
};

export default vendorProductsReducer;
