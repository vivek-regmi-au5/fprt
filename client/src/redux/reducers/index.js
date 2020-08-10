import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./alert";
import authReducer from "./auth";
import vendorProductsReducer from "./vendorProducts";
import brandReducer from "./brands";
import categoryReducer from "./categories";

var rootReducer = combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  vendorProducts: vendorProductsReducer,
  brands: brandReducer,
  categories: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "alerts", "vendorProducts"],
};

export default persistReducer(persistConfig, rootReducer);
