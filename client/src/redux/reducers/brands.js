import { GET_BRANDS, DELETE_BRAND } from "./../types";

const initialState = {
  brands: null,
};

const brandReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: payload.data.brands,
      };

    case DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter((brand) => {
          return brand._id !== payload;
        }),
      };

    default:
      return state;
  }
};

export default brandReducer;
