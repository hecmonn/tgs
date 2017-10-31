import {combineReducers} from 'redux';
import tours from './tours';
import users from './users';
export const rootReducer=combineReducers({
    tours,
    users
});
