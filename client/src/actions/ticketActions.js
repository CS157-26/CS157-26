import axios from "axios";
import { GET_TICKET_ERRORS } from "./types";

export const createTicket = (newTicket, history) => dispatch => {
    axios.post("api/tickets", newTicket)
        .then(res => {
            history.push("/dashboard");
        })
        .catch(err => {
            dispatch({type: GET_TICKET_ERRORS, payload: err.data});
        })
}