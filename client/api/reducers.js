import {BOOKS_LOAD, BOOK_LOAD} from '../constants/AppConstants';
import {LOGIN_FAIL, LOGIN_SUCCES, LOGIN_REQUEST} from '../constants/UserVkConstants';
const initialState = {
    book: { id: 0, name: '', description: '' },
    books: [],
    name: '',
    error: '',
    id: '',
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LOAD:
            return { ...state, books: action.books };
        case BOOK_LOAD:
            return { ...state, book: action.book };
        case LOGIN_SUCCES:
            return {...state, name: action.payload, id: action.payId, error: ''};
        case LOGIN_FAIL:
            return {...state, error: action.payload.message};
        default:
            return state;
    }
}