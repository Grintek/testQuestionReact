import React, {Component} from 'react';

export default class LoginAdmin extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const value = e.target.elements[0].value;
        window.localStorage.setItem('rr_login', value);
    };

    render(){
        return(
            <div className='footer'>
                <div className='col-md-12'>Пожалуйста, введите логин:</div>
                <form className='col-md-4' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='login'/>
                    <button type='submit'>Войти</button>
                </form>
            </div>
        );
    };

}