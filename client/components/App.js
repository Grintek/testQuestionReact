import React,{Component} from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import './App.scss';
import axios from 'axios';

// class BookId extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//
//     }
// }

class App extends Component {
    // state = {
    //     booooks: []
    // };
    // componentDidMount() {
    //     const config = {
    //         url: 'http://www.localhost:8081/api/books'
    //     };
    //     axios(config).then(response => {
    //         const booooks = response.data.map;
    //         this.setState(booooks);
    //     }).catch(error => console.log(error));
    // }

    render() {
        return (
            <div>
                <h1>Books</h1>
                <div>
                    <ul>
                       {/* {
                            this.state.booooks.map(book => <li>{book.name}</li>)
                        }*/}
                    </ul>
                </div>
                {/*<Route exact path="/books" component={BookesId}/>*/}
                {/*<Route exact path="/book/:id" component={BookesId}/>*/}
            </div>
        )
    }
// constructor(){
//     super();
// }
//     render() {
//         return (
//             <div className='App'>
//                 <h2 className='App__header'>Books</h2>
//                 <ul>
//                     {
//                         this.props.state.name.book.map((item) => {
//                           return (
//                               <li key={item.id}>
//                                   <NavLink to={'/${item.id}'} >{item.name}</NavLink>
//                               </li>)
//                         })
//                     }
//                 </ul>
//                 <Router>
//                     <Switch>
//                         <Route exact path="/" component={App}/>
//                         <Route exact path="/book/:id" component={BookId}/>
//                     </Switch>
//                 </Router>
//             </div>
//         );
//     }
}

const mapStateBooks = (state) => {
    return {
        name: state.reduce
    };
};



export default App;
