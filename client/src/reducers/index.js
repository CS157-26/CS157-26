import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import authReducer from "./authReducers";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  tickets: ticketsReducer
});
