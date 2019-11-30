import axios from "axios";
import { GET_ERRORS, LOADING_DATA, GET_ANALYTICS_OPEN_TICKETS, GET_ANALYTICS_AVG_RESOLVE, GET_ANALYTICS_TEAM_HISTORY } from "./types";

// Retrieve Open Tickets by Team
export const getOpenTickets = () => dispatch => {
  dispatch({type: LOADING_DATA, payload: {dataGot: GET_ANALYTICS_OPEN_TICKETS}});
  axios
    .get("/api/data/openTicketsByTeam")
    .then(res => {
        dispatch({
            type: GET_ANALYTICS_OPEN_TICKETS,
            payload: res.data
        });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    })
};

// Retrieve Average Resolve time by Team
export const getAverageResolve = () => dispatch => {
    dispatch({type: LOADING_DATA, payload: {dataGot: GET_ANALYTICS_AVG_RESOLVE}});
    axios
      .get("/api/data/avgCloseTime")
      .then(res => {
          dispatch({
              type: GET_ANALYTICS_AVG_RESOLVE,
              payload: res.data
          });
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      })
  };

  // Retrieve team open ticket history
  export const getTicketHistory = (_team_id, _start, _end, _step) => dispatch => {
    dispatch({type: LOADING_DATA, payload: {dataGot: GET_ANALYTICS_TEAM_HISTORY}});
    axios
      .get("/api/data/ticketsOverTime", {params:{team_id:_team_id, start:_start, end:_end, step:_step}})
      .then(res => {
          dispatch({
              type: GET_ANALYTICS_TEAM_HISTORY,
              payload: res.data
          });
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };