import React, {Component} from 'react';
import './_login.scss';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "@material-ui/core/Button";
import {loginVk} from "../../api/index";
import userVkState from "../../api/redusers/vkUserReducer";

class Login extends Component{
static propTypes = {
    loginVk: PropType.func.isRequired
};
    render(){
        const loginVk = this.props.loginVk;
        console.log(this.props.user);
        const user = this.props.user;
        console.log(user.name);
        let template;

        if (user.name){
            template = <div>
                <p>Hello, {user.name}! <br/></p>
                <h1>{user.id}</h1>
            </div>;
        }else{
            template = <Button onClick={loginVk}>Войти</Button>
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