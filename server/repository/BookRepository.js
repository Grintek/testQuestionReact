import books from '../db/books'

export class BookRepository {
    /**
     * Получить список книг
     */
    static getListBooks() {
        return books;
    }

    /**
     * Получить книгу по ID
     * @param id индитификатор книги
     * @returns {*}
     */
    static
    getBookById(id) {
        return books.find(book => {
            // TODO костылик, так как получается id в строковом формате
            return book.id.toString() === id.toString();
        });
    }
}



