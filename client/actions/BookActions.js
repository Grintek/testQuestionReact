import listBooks from '../api/index'

const bookArray = listBooks.then(function(result) {
   return result
});

    const books = {
        type: "BOOKS",
        book: bookArray
    };
export {books};