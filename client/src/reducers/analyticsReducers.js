import {
    GET_ERRORS,
    GET_ANALYTICS_OPEN_TICKETS,
    GET_ANALYTICS_AVG_RESOLVE,
    GET_ANALYTICS_TEAM_HISTORY
} from "../actions/types";

const initialState = {
    open_tickets_data: [],
    avg_resolve_data: [],
    ticket_history: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANALYTICS_OPEN_TICKETS: {
            return {
                ...state,
                open_tickets_data: action.payload,
                errors: {}
            };
        }
        case GET_ANALYTICS_AVG_RESOLVE: {
            return {
                ...state,
                avg_resolve_data: action.payload,
                errors: {}
            };
        }
        case GET_ANALYTICS_TEAM_HISTORY: {
            return {
                ...state,
                ticket_history: action.payload,
                errors: {}
            };
        }
        case GET_ERRORS: {
            return {
                ...state,
                errors: action.payload
            };
        }
        default:
            return state;
    }
}