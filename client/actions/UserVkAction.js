import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCES} from "../constants/UserVkConstants";

export const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const loginSucces = () => {
    return {
        type: LOGIN_SUCCES,
        payload: username

    }
};

export const loginFail = () =>{
    return{
        type: LOGIN_FAIL,
        error: true,
        payload: new Error('Ошибка авторизации')
    }
};