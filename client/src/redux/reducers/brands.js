import { GET_BRANDS } from "./../types";

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

    default:
      return state;
  }
};

export default brandReducer;
