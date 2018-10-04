import React, {Component} from 'react';
import './_login.scss';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "@material-ui/core/Button";
import {redirectTo, Redirect} from '@reach/router';
import {loginVk} from "../../api/index";
import userVkState from "../../api/redusers/vkUserReducer";
import as from './vkkk.png';
class Login extends Component{
static propTypes = {
    loginVk: PropType.func.isRequired
};
    // shouldComponentUpdate(){
    //     const value = window.localStorage.getItem("vk_login");
    //     console.log(value);
    //     if(value === 'true'){
    //         redirectTo("/home");
    //     }
    // }
    render(){

        const loginVk = this.props.loginVk;
        console.log(this.props.user);
        const user = this.props.user;
        console.log(user.name);
        const sty = {background: `url(${as}) no-repeat padding-box`};
        let template;
        if (user.name){
            template = <div>
                <h1>Переход</h1>
                {window.location.reload(true)}
                </div>
        }else{
            template = <button style={sty} className="loginButton" onClick={loginVk} />
        }

        return(
            <div className="login">
                {template}
                {user.error ? <p>{user.error}. <br/> Попробуйте еще раз</p> : ''}
            </div>
        );
    };

}

function mapDispatchToProps(dispatch) {
    return{
        loginVk(){
           dispatch(loginVk());
        }

    }
}

function mapStateToProps(state) {
    return {
        user: state.userVkState
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);