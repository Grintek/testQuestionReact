import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Redirect} from '@reach/router';

export default class ButtonLogout extends Component{
    logout(){
        window.localStorage.clear();
    }
    render(){
        return(<div>
        <Button onClick={this.logout} href="/">Logout</Button>
            </div>
        );
    }

}