import {
    GET_TICKETS,
    USER_LOADING
} from "../actions/types";

const initialState = {
    tickets: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKETS: {
            return {
                tickets: action.payload,
                loading: false
            };
        }
        case USER_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state;
    }
}