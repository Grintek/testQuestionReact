import axios from 'axios';
import React from 'react';
import { apiPrefix } from '../../etc/config.json';
import {fetchBooks, fetchBookId} from '../actions/BookActions';
import {loginFail, loginSucces, requestLogin} from '../actions/UserVkAction';
import {LOGIN_FAIL, LOGIN_SUCCES, LOGIN_REQUEST} from '../constants/UserVkConstants';

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

export const loginVk = () => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        });

        VK.Auth.login((respons) => {
            if (respons.session){
                let username = respons.session.user.first_name;
                dispatch({
                    type: LOGIN_SUCCES,
                    payload: username
                });
            }else{
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                });
            }
        })
    }
};