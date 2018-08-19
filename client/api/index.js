import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default class BooksService{

    static listBooks() {
        return axios.get(`${apiPrefix}/api/books`);
    }

    static getBookById(bookId) {
        return axios.get(`${apiPrefix}/api/book/${bookId}`)
    }

}
