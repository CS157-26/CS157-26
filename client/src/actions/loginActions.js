import axios from "axios";
import { GET_ERRORS } from "./types";

// Register user
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/login/", userData)
    .then(res => {
        return res.json();
    }).then(data => {
        localStorage.setItem('token', data.token);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
