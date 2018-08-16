import express from 'express';
import { serverPort } from '../etc/config.json';

import {BookRepository} from "./repository/BookRepository";

// Initialization of express application
const app = express();

app.get('/api/books', (req, res) => {
    res.send(BookRepository.getListBooks());
});

app.get('/api/book/:id', (req, res) => {
    res.send(BookRepository.getBookById(req.params.id));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
