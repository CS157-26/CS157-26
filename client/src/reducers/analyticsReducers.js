import {
    GET_ERRORS,
    LOADING_DATA,
    GET_ANALYTICS_OPEN_TICKETS,
    GET_ANALYTICS_AVG_RESOLVE,
    GET_ANALYTICS_TEAM_HISTORY
} from "../actions/types";

const initialState = {
    open_tickets_data: [],
    open_tickets_data_loaded: false,
    avg_resolve_data: [],
    avg_resolve_data_loaded: false,
    ticket_history: {},
    ticket_history_loaded: false,
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANALYTICS_OPEN_TICKETS: {
            return {
                ...state,
                open_tickets_data: action.payload,
                open_tickets_data_loaded: true,
                errors: {}
            };
        }
        case GET_ANALYTICS_AVG_RESOLVE: {
            return {
                ...state,
                avg_resolve_data: action.payload,
                avg_resolve_data_loaded: true,
                errors: {}
            };
        }
        case GET_ANALYTICS_TEAM_HISTORY: {
            return {
                ...state,
                ticket_history: action.payload,
                ticket_history_loaded: true,
                errors: {}
            };
        }
        case GET_ERRORS: {
            return {
                ...state,
                errors: action.payload
            };
        }
        case LOADING_DATA: {
            switch(action.payload.dataGot) {
                case GET_ANALYTICS_OPEN_TICKETS: {return {
                    ...state,
                    open_tickets_data: [],
                    open_tickets_data_loaded: false
                }}
                case GET_ANALYTICS_AVG_RESOLVE: {return {
                    ...state,
                    avg_resolve_data: [],
                    avg_resolve_data_loaded: false
                }}
                case GET_ANALYTICS_TEAM_HISTORY: {return {
                    ...state,
                    ticket_history: {},
                    ticket_history_loaded: false
                }}
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}