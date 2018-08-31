import axios from 'axios';
import {BOOK_LOAD, BOOKS_LOAD, LOAD} from '../constants/AppConstants'
import React from 'react'
import { apiPrefix } from '../../etc/config.json';
import {fetchBooks} from '../actions/BookActions'

export const fetchAllBooks = () => {
    return (dispatch) => {
        axios.get(`${apiPrefix}/api/books`)
            .then(response => {
                dispatch(fetchBooks(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};