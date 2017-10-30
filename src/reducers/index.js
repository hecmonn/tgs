import {combineReducers} from 'redux';
import tour from './tour';
import users from './users';
export const rootReducer=combineReducers({
    tour,
    users
});
