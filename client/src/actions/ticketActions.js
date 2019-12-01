import axios from "axios";
import { GET_TICKET_ERRORS, GET_CATEGORIES, GET_TYPES, GET_ITEMS, CLEAR_REDUCER, LOADING_CATEGORIES, LOADING_TYPES, LOADING_ITEMS } from "./types";

export const createTicket = (newTicket, history) => dispatch => {
    axios.post("/api/tickets/create", newTicket)
        .then(res => {
            history.push("/dashboard");
        })
        .catch(err => {
            dispatch({type: GET_TICKET_ERRORS, payload: err.data});
        })
}

export const fetchCategories = () => dispatch => {
    dispatch({type: LOADING_CATEGORIES});
    axios.get("/api/cti/categories")
        .then(res => {
            dispatch({type: GET_CATEGORIES, payload: res.data});
        })
        .catch(err => {
            dispatch({type: GET_TICKET_ERRORS, payload: err.data});
        })
}

export const fetchTypes = (categoryId) => dispatch => {
    dispatch({type: LOADING_TYPES});
    axios.get(`/api/cti/types?category_id=${categoryId}`)
        .then(res => {
            dispatch({type: GET_TYPES, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GET_TICKET_ERRORS, payload: err.data});
        })
}

export const fetchItems = (categoryId, typeId) => dispatch => {
    dispatch({type: LOADING_ITEMS});
    axios.get(`/api/cti/items?category_id=${categoryId}&type_id=${typeId}`)
        .then(res => {
            dispatch({type: GET_ITEMS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: GET_TICKET_ERRORS, payload: err.data});
        })
}

export const clearReducer = () => dispatch => {
    dispatch({type: CLEAR_REDUCER});
}