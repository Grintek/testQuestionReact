import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Redirect} from '@reach/router';
import Typography from "@material-ui/core/Typography";

export default class ButtonLogout extends Component{
    logout(){
        window.localStorage.clear();
    }
    render(){
        return(<Button onClick={this.logout} className="navButton" href="/">Logout</Button>);
    }

}