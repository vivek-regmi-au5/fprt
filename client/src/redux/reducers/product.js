import { ADD_PRODUCTS, DELETE_PRODUCT } from "./../types";

const initialState = {
  products: null,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: payload.data.products,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => {
          return product._id !== payload;
        }),
      };
    default:
      return state;
  }
};

export default productReducer;
