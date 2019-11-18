import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import authReducer from "./authReducers";
import dashboardReducer from "./dashboardReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  dashboard: dashboardReducer
});
