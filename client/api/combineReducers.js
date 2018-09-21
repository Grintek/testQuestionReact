import React from 'react';
import {combineReducers} from 'redux';
import booksState from './redusers/booksReducer';
import userVkState from './redusers/vkUserReducer';

export default combineReducers({
    userVkState,
    booksState
})