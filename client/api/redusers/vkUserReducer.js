import {LOGIN_FAIL, LOGIN_SUCCES, LOGIN_REQUEST} from '../../constants/UserVkConstants';

/**
 * Добавим в хранилище из сессии наши данные чтобы не пропадали после обновления страницы
 * @type {string}
 */
const name = window.localStorage.getItem('vk_first_name');
const id = window.localStorage.getItem('vk_id');
const initialState = {
    name: name,
    error: '',
    id: id,
};

export default function userVkState(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCES:
            return {...state, name: action.payload, id: action.payId, error: ''};
        case LOGIN_FAIL:
            return {...state, error: action.payload.message};
        default:
            return state;
    }
}