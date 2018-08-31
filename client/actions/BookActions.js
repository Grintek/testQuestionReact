import {BOOKS_LOAD, LOAD, BOOK_LOAD} from "../constants/AppConstants";

export const fetchBooks = (books) => {
    return {
        type: BOOKS_LOAD,
        books
    }
};