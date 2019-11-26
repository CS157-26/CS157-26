import {
    GET_TICKETS_OVERVIEW,
    GET_TICKET_DETAILS,
    TICKET_OVERVIEW_LOADING,
    TICKET_DETAILS_LOADING,
    CLEAR_TICKETS,
    CLEAR_DETAILS,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    tickets_overview: [],
    ticket_details: {},
    overview_loading: false,
    details_loading: false,
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKETS_OVERVIEW: {
            return {
                ...state,
                tickets_overview: action.payload,
                loading: false,
                errors: {}
            };
        }
        case GET_TICKET_DETAILS: {
            return {
                ...state,
                ticket_details: action.payload,
                details_loading: false,
                errors: {}
            }
        }
        case TICKET_OVERVIEW_LOADING: {
            return {
                ...state,
                overview_loading: true,
                errors: {}
            }
        }
        case TICKET_DETAILS_LOADING: {
            return {
                ...state,
                details_loading: true,
                errors: {}
            }
        }
        case GET_ERRORS: {
            return {
                ...state,
                overview_loading: false,
                details_loading: false,
                errors: action.payload
            }
        }
        case CLEAR_TICKETS: {
            return {
                ...state,
                tickets_overview: [],
                ticket_details: {}
            };
        }
        case CLEAR_DETAILS: {
            return {
                ...state,
                ticket_details: {}
            };
        }
        default:
            return state;
    }
}