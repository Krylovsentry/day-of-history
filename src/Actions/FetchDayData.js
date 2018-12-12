import axios from 'axios';
import {apiUrl, monthsMap} from "../utils/Constants";
import {FETCHING_DAY_DATA, FETCHING_DAY_DATA_FAILURE, FETCHING_DAY_DATA_SUCCESS} from "../utils/ActionTypes";

export default function FetchDayData() {
    const date = new Date();
    return dispatch => {
        dispatch({type: FETCHING_DAY_DATA});
        return axios.get(`${apiUrl}${monthsMap[date.getMonth()]}%20${date.getDate()}`)
            .then(result => {
                dispatch({type: FETCHING_DAY_DATA_SUCCESS, payload: result.data})
            })
            .catch(error => {
                dispatch({type: FETCHING_DAY_DATA_FAILURE, payload: error.data})
            })
    }
}