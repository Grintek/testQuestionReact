import React,{Component} from 'react';
import {Router, Route, Switch, NavLink} from 'react-router-dom';
import './App.scss';
import {connect} from 'react-redux';

class BookId extends Component{
    constructor(){
        super();
    }
    render(){

    }
}

class App extends Component {
  constructor(props){
      super(props);

  }
    render() {
        return (
            <div>
                <h1>Books</h1>
                <ul>
                    {
                        this.props.state.name.book.map((item) => {
                          return (
                              <li key={item.id}>
                                  <NavLink to={'/${item.id}'} >{item.name}</NavLink>
                              </li>)
                        })
                    }
                </ul>
                <div>
                    <Router>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/:id" component={BookId}/>
                    </Router>
                </div>


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
        name: state.reduser
    };
};



export default App;
