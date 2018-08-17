import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default class ax{

    static listBooks() {
        return axios.get(`${apiPrefix}/books`);
    }

    static idBook(bookId) {
        return axios.get(`${apiPrefix}/book/${bookId}`);
    }

}
