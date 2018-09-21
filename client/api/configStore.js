import { createStore, applyMiddleware} from 'redux';
import combineReducers from './combineReducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];
export default function configStore (initialState) {
    const store = createStore(combineReducers, initialState, applyMiddleware(...middlewares));

    if (module.hot){
        module.hot.accept('./combineReducers', () => {
            const nextRootReducer = require('./redusers/booksReducer');
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}