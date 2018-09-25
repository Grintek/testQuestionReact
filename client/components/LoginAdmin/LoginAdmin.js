import React, {Component} from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "@material-ui/core/Button";
import * as vkIndex from "../../api";
import userVkState from "../../api/redusers/vkUserReducer";

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
            template = <div>
                <p>Hello, {user.name}! <br/></p>
                <h1>{user.id}</h1>
            </div>;
        }else{
            template = <Button onClick={loginVk}>Войти</Button>
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
        user: state.userVkState
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginAdmin);