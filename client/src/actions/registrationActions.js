import axios from "axios";

// Register user
export const registerUser = (userData, history) => dispatch => {
  axios.post("/api/users/register", userData);
};
