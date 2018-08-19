import React from 'react';
import './App.scss';
import WithcCurd from '../api/index'
import BookId from './BookId';

function App({data}) {
    return(

      <div>
          <BookId books={data}/>
      </div>
    );
}


export default WithcCurd(App);
