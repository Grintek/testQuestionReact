import React, {Component} from 'react';
import PropType from 'prop-types';

export default function BooksApp(props){
const {name, books} = props.state;
    return (
        <div>
            <h2>{name}</h2>
            <h1>Books {books.length}</h1>
        </div>
        )

}

BooksApp.propType = {
    name: PropType.object.isRequired,
    books: PropType.array.isRequired
};