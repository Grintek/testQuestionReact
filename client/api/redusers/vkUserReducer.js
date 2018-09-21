import {LOGIN_FAIL, LOGIN_SUCCES, LOGIN_REQUEST} from '../../constants/UserVkConstants';
const initialState = {
    name: '',
    error: '',
    id: '',
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