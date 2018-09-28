import React,{Component} from 'react';
import {redirectTo} from '@reach/router';

export default class Admin extends Component{
    componentWillMount(){
        const value = window.localStorage.getItem('vk_login');
        if(value !== "true"){
            redirectTo("/");
        }
    }

    render(){
    return (
        <div>Adminka</div>
    );
    }
}