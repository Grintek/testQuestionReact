import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listBooks() {
        return axios.get(`${apiPrefix}/books`);
    },

    idBook(bookId) {
        return axios.get(`${apiPrefix}/book/${bookId}`);
    },

}
