import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import bookAction from './actions/BookActions'


const reducer = (state, action) => {
    switch (action.type) {
        case "BOOKS":
            state = action.book;
            break;
        case "BOOK":
            state = action.bookId;
            break;
    }
    return state;
};

const store_books = createStore(reducer);
const store_bookId = createStore(reducer);
console.log(bookAction.books);
store_books.dispatch(bookAction.books);
store_bookId.dispatch(bookAction.book_id);

ReactDOM.render(
    <Provider store={store_books} storeId={store_bookId}>
        <div>
            <App/>
            <p>
                asfasfasfasfsa
            </p>
        </div>

    </Provider>

    ,
    document.getElementById('mount-point')
);


//module.hot.accept();
