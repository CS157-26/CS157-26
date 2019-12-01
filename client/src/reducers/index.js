import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import authReducer from "./authReducers";
import analyticsReducer from "./analyticsReducers";
import dashboardReducer from "./dashboardReducers";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  analytic: analyticsReducer,
  dashboard: dashboardReducer,
  tickets: ticketsReducer
});
