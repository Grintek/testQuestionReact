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
/**
 * Совершаем авторизацию
 * @returns {Function}
 */
export const loginVk = () => {
    return(dispatch) => {
        dispatch(requestLogin());

        VK.Auth.login((respons) => {
            if (respons.session){
                let username = respons.session.user.first_name; //получаем имя
                let user_id = respons.session.user.id; //получаем id
                dispatch(loginSucces(username, user_id));
            }else{
                dispatch(loginFail());
            }
        }, 4, 5)
    }
};