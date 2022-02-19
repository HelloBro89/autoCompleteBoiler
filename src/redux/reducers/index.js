import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';

export const rootReducer = combineReducers({
    users: usersReducer,
});
