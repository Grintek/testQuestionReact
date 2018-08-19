import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import {books} from './actions/BookActions'


const reducer = (state = { a: []  }, action) => {
    switch (action.type) {
        case "BOOKS":
            state = state.a = action.book;

    }
    return state;
};
console.log(books);
const store_books = createStore(reducer);
store_books.subscribe(() => {
    console.log("Store update", store_books.getState())
});

store_books.dispatch(books);
ReactDOM.render(
<Provider state={123}>
        <div>
            <App/>
            <p>aaaaa</p>
        </div>
</Provider>,
    document.getElementById('mount-point')
);


//module.hot.accept();
