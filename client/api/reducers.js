import {BOOKS_LOAD, BOOK_LOAD} from '../constants/AppConstants'
const initialState = {
    book: { id: 0, name: '', description: '' },
    books: []
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LOAD:
            return { ...state, books: action.books };
        case BOOK_LOAD:
            return { ...state, book: action.book[0] };
        default:
            return state;
    }
}