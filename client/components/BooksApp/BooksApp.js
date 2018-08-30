import React, {Component} from 'react';
import PropType from 'prop-types';

export default function BooksApp(props){
const {name} = props.state;
    return (
        <div>
            <h1>{name}</h1>
        </div>
        )

}

BooksApp.PropType = {
    name: PropType.string.isRequired
};