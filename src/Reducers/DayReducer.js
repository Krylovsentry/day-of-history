import {FETCHING_DAY_DATA, FETCHING_DAY_DATA_FAILURE, FETCHING_DAY_DATA_SUCCESS} from "../utils/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DAY_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                hasError: false,
                errorMessage: null
            });

        case FETCHING_DAY_DATA_SUCCESS:
            console.log(action.payload);
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_DAY_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.error
            });

        default:
            return state;
    }
}