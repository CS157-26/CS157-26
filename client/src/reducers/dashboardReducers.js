import {
    GET_TICKETS,
    USER_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    tickets: [],
    loading: false,
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKETS: {
            return {
                tickets: action.payload,
                loading: false,
                errors: {}
            };
        }
        case USER_LOADING: {
            return {
                ...state,
                loading: true,
                errors: {}
            }
        }
        case GET_ERRORS: {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }
        default:
            return state;
    }
}