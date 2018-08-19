import axios from 'axios';
import React from 'react'
import { apiPrefix } from '../../etc/config.json';

function WithcCurd(Component) {
    class WithcCurd extends React.Component{
        state = {
            data: []
        };

        componentDidMount(){
            this.get();
        }

        get = () => {
            axios.get(`${apiPrefix}/api/books`)
                .then(response => response.data)
                .then(data => this.setState((prevState) =>{ return{ data: prevState.data = data}}))

        };

        render(){
            return(
              <Component data={this.state.data}/>
            );
        }

    }
    return WithcCurd;
}

export default WithcCurd;