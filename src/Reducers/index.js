import { combineReducers } from 'redux';
import DayReducer from './DayReducer';

export default combineReducers({
    day: DayReducer
});