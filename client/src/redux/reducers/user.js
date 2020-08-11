import { ADD_USERS, DELETE_USER } from "./../types";

const initialState = {
  users: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USERS:
      return {
        ...state,
        users: payload.data.persons,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user._id !== payload;
        }),
      };
    default:
      return state;
  }
};

export default userReducer;
