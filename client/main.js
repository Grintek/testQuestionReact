import React from 'react';
import ReactDOM from 'react-dom';
import WithcCurd from './components/App.js';
import { createStore } from 'redux';
import {Provider} from 'react-redux';




// const reducer = (state = { a: []  }, action) => {
//     switch (action.type) {
//         case "BOOKS":
//             state = state.a = action.book;
//
//     }
//     return state;
// };
// console.log(books);
// const store_books = createStore(reducer);
// store_books.subscribe(() => {
//     console.log("Store update", store_books.getState())
// });
//
// store_books.dispatch(books);
ReactDOM.render(

        <div>
            <header>Books</header>
            <WithcCurd/>
        </div>

    ,
    document.getElementById('mount-point')
);


//module.hot.accept();
