import axios from "axios";
import { GET_ERRORS, GET_TICKETS_OVERVIEW, TICKET_OVERVIEW_LOADING, TICKET_DETAILS_LOADING, GET_TICKET_DETAILS } from "./types";

export const getOverviewUserTickets = (userId, teamId) => dispatch => {
  dispatch({type: TICKET_OVERVIEW_LOADING});
  axios.post("/api/tickets/overview", {user_id: userId, team_id: teamId})
    .then(res => {
      dispatch({
        type: GET_TICKETS_OVERVIEW,
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

export const getTicketDetails = (ticketId) => dispatch => {
  dispatch({type: TICKET_DETAILS_LOADING});
  axios.post("/api/tickets/details", {ticket_id: ticketId})
    .then(res => {
      dispatch({
        type: GET_TICKET_DETAILS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    })
}