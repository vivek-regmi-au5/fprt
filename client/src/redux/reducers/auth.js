import { PEOPLE_SIGNUP, CLEAN_UP, PEOPLE_SIGNIN, ADMIN_LOGIN } from "../types";

var initialState = {
  isAuthenticated: false,
  type: "user",
  user: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAN_UP:
      return {
        isAuthenticated: false,
        type: "user",
        user: null,
      };
    case PEOPLE_SIGNUP:
      return {
        ...state,
        isAuthenticated: true,
        type: payload.data.newPerson.type,
        user: payload.data.newPerson,
      };

    case PEOPLE_SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        type: payload.data.type,
        user: payload.data,
      };

    case ADMIN_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        type: "admin",
      };

    default:
      return state;
  }
};

export default authReducer;
