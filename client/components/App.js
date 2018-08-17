import React,{Component} from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import axios from 'axios';
import ax from '../api/index'
import './App.less';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            bookId: []
        }
    }

    componentDidMount(){
        ax.listBooks.then(response =>{

            const newBooks = response.data.map(a => {
                return{
                    id: a.id,
                    name: a.name
                };
            });
            const newState = Object.assign({}, this.state, {
                books: newBooks
            });
            this.setState(newState);
        }).catch(error => console.log(error));

        ax.idBook.then(response => {

            const newBook = response.data;

            const newState = Object.assign({}, this.state, {
                bookId: newBook
            });
            this.setState(newState);
        }).catch(error => console.log(error));
    }


    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Books</h2>
                {/*Продолжение следует*/}
            </div>
        );
    }
}


export default App;
