import {
    GET_AUTHORED_TICKETS,
    GET_ASSIGNED_TICKETS,
    GET_TEAM_TICKETS,
    GET_ALL_TICKETS,
    GET_TICKET_DETAILS,
    TICKET_OVERVIEW_LOADING,
    TICKET_DETAILS_LOADING,
    CLEAR_TICKETS,
    CLEAR_DETAILS,
    GET_ERRORS,
    GET_TEAMS,
    TEAMS_LOADING
} from "../actions/types";

const initialState = {
    tickets_overview: {
        authored: [],
        assigned: [],
        team: [],
        all: []
    },
    ticket_details: {},
    overview_loading: false,
    details_loading: false,
    teams: [],
    teams_loading: false,
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AUTHORED_TICKETS: {
            return {
                ...state,
                tickets_overview: {
                    ...state.tickets_overview,
                    authored: action.payload
                },
                loading: false,
                errors: {}
            };
        }
        case GET_ASSIGNED_TICKETS: {
            return {
                ...state,
                tickets_overview: {
                    ...state.tickets_overview,
                    assigned: action.payload
                },
                loading: false,
                errors: {}
            };
        }
        case GET_TEAM_TICKETS: {
            return {
                ...state,
                tickets_overview: {
                    ...state.tickets_overview,
                    team: action.payload
                },
                loading: false,
                errors: {}
            };
        }
        case GET_ALL_TICKETS: {
            return {
                ...state,
                tickets_overview: {
                    ...state.tickets_overview,
                    all: action.payload
                },
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
                tickets_overview: {
                    authored: [],
                    assigned: [],
                    team: [],
                    all: []
                },
                ticket_details: {}
            };
        }
        case CLEAR_DETAILS: {
            return {
                ...state,
                ticket_details: {}
            };
        }
        case GET_TEAMS: {
            return {
                ...state,
                teams: action.payload,
                teams_loading: false
            }
        }
        case TEAMS_LOADING: {
            return {
                ...state,
                teams_loading: true
            }
        }
        default:
            return state;
    }
}