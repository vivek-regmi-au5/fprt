import { GET_CATEGORIES, CLEAR_CATEGORIES } from "./../types";

const initialState = {
  categories: null,
};

const cayegoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_CATEGORIES:
      return {
        categories: null,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload.data.categorys,
      };

    default:
      return state;
  }
};

export default cayegoryReducer;
