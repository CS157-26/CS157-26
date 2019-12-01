import axios from "axios";
import { GET_ERRORS, GET_AUTHORED_TICKETS, GET_ASSIGNED_TICKETS, GET_TEAM_TICKETS, GET_ALL_TICKETS, TICKET_OVERVIEW_LOADING, TICKET_DETAILS_LOADING, GET_TICKET_DETAILS, CLEAR_TICKETS, CLEAR_DETAILS, GET_TEAMS, TEAMS_LOADING } from "./types";
import { BottomNavigationAction } from "@material-ui/core";

export const getAuthoredTickets = (userId) => dispatch => {
  dispatch({type: TICKET_OVERVIEW_LOADING});
  axios.post("/api/tickets/overview", {user_id: userId, params: "authored"})
    .then(res => {
      dispatch({
        type: GET_AUTHORED_TICKETS,
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

export const getAssignedTickets = (userId) => dispatch => {
  dispatch({ type: TICKET_OVERVIEW_LOADING });
  axios.post("/api/tickets/overview", {user_id: userId, params: "assigned"})
    .then(res => {
      dispatch({
        type: GET_ASSIGNED_TICKETS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}

export const getTeamTickets = (userId, teamId) => dispatch => {
  dispatch({ type: TICKET_OVERVIEW_LOADING });
  axios.post("/api/tickets/overview", {user_id: userId, team_id: teamId})
    .then(res => {
      dispatch({
        type: GET_TEAM_TICKETS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}

export const getAllTickets = () => dispatch => {
  dispatch({ type: TICKET_OVERVIEW_LOADING });
  axios.post("/api/tickets/overview")
    .then(res => {
      dispatch({
        type: GET_ALL_TICKETS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
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

export const clearTickets = () => dispatch => {
  dispatch({type: CLEAR_TICKETS});
};

export const clearTicketDetails = () => dispatch => {
  dispatch({type: CLEAR_DETAILS});
}

export const getTeams = (userId) => dispatch => {
  dispatch ({ type: TEAMS_LOADING });
  axios.post("/api/users/teams", { user_id: userId })
    .then(res => {
      dispatch({
        type: GET_TEAMS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}