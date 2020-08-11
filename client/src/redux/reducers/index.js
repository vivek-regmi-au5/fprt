import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./alert";
import authReducer from "./auth";
import vendorProductsReducer from "./vendorProducts";
import brandReducer from "./brands";
import categoryReducer from "./categories";
import userReducer from "./user";
import productReducer from "./product";

var rootReducer = combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  vendorProducts: vendorProductsReducer,
  brands: brandReducer,
  categories: categoryReducer,
  users: userReducer,
  products: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "alerts",
    "vendorProducts",
    "categories",
    "brands",
    "users",
    "products",
  ],
};

export default persistReducer(persistConfig, rootReducer);
