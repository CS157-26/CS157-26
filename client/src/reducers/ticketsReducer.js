import { GET_TICKET_ERRORS, GET_CATEGORIES, GET_TYPES, GET_ITEMS, CLEAR_REDUCER, LOADING_CATEGORIES, LOADING_TYPES, LOADING_ITEMS } from "../actions/types";

const initialState = {
    categoriesSelection: [],
    typesSelection: [],
    itemsSelection: [],
    loadingCategories: false,
    loadingTypes: false,
    loadingItems: false,
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TICKET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                loadingCategories: false,
                loadingTypes: false,
                loadingItems: false
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesSelection: action.payload,
                loadingCategories: false
            }
        case GET_TYPES:
            return {
                ...state,
                typesSelection: action.payload,
                loadingTypes: false
            }
        case GET_ITEMS:
            return {
                ...state,
                itemsSelection: action.payload,
                loadingItems: false
            }
        case CLEAR_REDUCER:
            return {
                categoriesSelection: [],
                typesSelection: [],
                itemsSelection: [],
                errors: {}
            }
        case LOADING_CATEGORIES:
            return {
                ...state,
                loadingCategories: true
            }
        case LOADING_TYPES:
            return {
                ...state,
                loadingTypes: true
            }
        case LOADING_ITEMS:
            return {
                ...state,
                loadingItems: true
            }
        default:
            return state;
    }
}