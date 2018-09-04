import axios from 'axios';
import React from 'react'
import { apiPrefix } from '../../etc/config.json';
import {fetchBooks, fetchBookId} from '../actions/BookActions'

/**
 * Получить книги
 */
export const fetchAllBooks = () => {
    return (dispatch) => {
       return axios.get(`${apiPrefix}/api/books`)
            .then(response => {
                dispatch(fetchBooks(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

/**
 * Получить книгу
 */
export const fetchBook = (id) => {
    return (dispatch) => {
       return axios.get(`${apiPrefix}/api/book/${id}`)
            .then(response => {
                console.log(id);
                dispatch(fetchBookId(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};