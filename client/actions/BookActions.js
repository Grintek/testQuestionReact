import BooksService from '../api/index'
class bookAction {


    static books() {
        return {
            type: "BOOKS",
            book: BooksService.listBooks
        }

    }
    static book_id() {
        return {
            type: "BOOK",
            bookId: BooksService.getBookById
        }

    }

}
export default bookAction;