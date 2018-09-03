import {BOOKS_LOAD, BOOK_LOAD} from '../constants/AppConstants'
const initialState = {
    book: [],
    books: []
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LOAD:
            return { ...state, books: action.books };
        case BOOK_LOAD:
            return { ...state, book: action.book };
        default:
            return state;
    }
}