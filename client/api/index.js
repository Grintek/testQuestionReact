import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';



const listBooks = axios.get(`${apiPrefix}/api/books`).then(function (response) {
    return response.data;

        }).catch(function (error) {

                console.log(error);
            });

export default listBooks;
