import {BOOKS_LOAD} from '../constants/AppConstants'
const initialState = {
    name: "none",
    pages: 0,
    description: "Пусто",
    books: []
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LOAD:
            return [...state, action.books];
        default:
            return state;
    }
}