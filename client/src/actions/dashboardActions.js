import axios from "axios";
import { GET_ERRORS, GET_TICKETS, USER_LOADING } from "./types";

export const getOverviewUserTickets = (userId, teamId) => dispatch => {
  dispatch({type: USER_LOADING});
  axios.get("/api/tickets/overview", {user_id: userId, team_id: teamId})
    .then(res => {
      dispatch({
        type: GET_TICKETS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    })
}