import React, {Component} from 'react';
import PropType from 'prop-types';

export default function BooksApp(props){
const {books} = props.state;
console.log(books);
    return (
        <div>
            <h1>Books {books.length}</h1>
            <ul>
            {books.map((e) =>
                <li key={e.id}>
                    {e.name}
                    </li>
            )}
            </ul>
        </div>
        )
}

BooksApp.propType = {
    name: PropType.object.isRequired,
    books: PropType.array.isRequired
};