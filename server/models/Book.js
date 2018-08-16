/**
 * Книга
 */
class Book {
    constructor(book) {
        this._id = book.id;
        this._name = book.name;
        this._description = book.description;
    }

    /**
     * Индитификатор
     */
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    /**
     * Название книги
     * @returns {*}
     */
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    /**
     * Описание книги
     * @returns {*}
     */
    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

}