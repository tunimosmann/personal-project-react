import { combineReducers } from 'redux';
import searchUser from './searchUser';
import userResults from './userResults';

export default combineReducers({
    searchUser,
    userResults
});