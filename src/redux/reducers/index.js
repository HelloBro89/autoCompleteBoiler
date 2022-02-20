import { combineReducers } from 'redux';
import usersReducer from './appDataReducer.js';

export const rootReducer = combineReducers({
    appData: usersReducer,
});
