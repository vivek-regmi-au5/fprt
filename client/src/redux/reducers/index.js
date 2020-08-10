import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./alert";
import authReducer from "./auth";

var rootReducer = combineReducers({
  alerts: alertReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "alerts"],
};

export default persistReducer(persistConfig, rootReducer);
