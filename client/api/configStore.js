import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];
export default function configStore (initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

    if (module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}