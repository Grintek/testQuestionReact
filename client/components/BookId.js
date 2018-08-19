import React, {Component} from 'react';
import {Router, BrowserRouter, Link, Route } from 'react-router-dom';
class BookId extends Component{
    render(){
    return(
      <div>
          <ul>
              {this.props.books.map((c) =>
                 <li key={c.id}>{c.name}</li>
              )}
          </ul>
      </div>
    );
    }
}

export default BookId;