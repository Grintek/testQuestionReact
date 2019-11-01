import {applyMiddleware, createStore} from 'redux';
import combineReducers from './combineReducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
export default function configStore (initialState) {
    return createStore(combineReducers, initialState, applyMiddleware(...middlewares));
}