import React, {Component} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as vkIndex from "../../api";

class LoginAdmin extends Component{
static propTypes = {
    vkIndex: PropType.object.isRequired
};
    render(){
        const {loginVk} = this.props.vkIndex;
        console.log(this.props.user);
        const user = this.props.user;
        console.log(user.name);
        let template;

        if (user.name){
            template = <p>Hello, {user.name}!</p>
        }else{
            template = <button onSubmit={loginVk}>Войти</button>
        }
        return(
            <div className='footer'>
                {template}
                {user.error ? <p>{user.error}. <br/> Попробуйте еще раз</p> : ''}
            </div>
        );
    };

}

function mapDispatchToProps(dispatch) {
    return{
        vkIndex: bindActionCreators(vkIndex, dispatch)
        }
}

function mapStateToProps(state) {
    return {
        user: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);