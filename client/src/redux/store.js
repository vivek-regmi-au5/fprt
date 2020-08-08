import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import alertReducer from "./reducers/alert";

var rootReducer = combineReducers({
  alerts: alertReducer,
});

var store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
