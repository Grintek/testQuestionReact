import React, {Component} from 'react'
import {redirectTo} from "@reach/router";
import AddAnswer from "./AddAnswer"
import {Router, Redirect} from "@reach/router";
import Button from "@material-ui/core/Button";


class EditQuestion extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectCorrect: "123123",
            redirect: false
        };

        this.submitSave = this.submitSave.bind(this);
        this.radioForm = this.radioForm.bind(this);
        this.checkBoxForm = this.checkBoxForm.bind(this);
        this.onclickRedirect = this.onclickRedirect.bind(this);
    }

    checkBoxForm(){

    }

    radioForm(id){
        this.setState({ selectCorrect: id });
        console.log(`id = ${id}`);
    }

    submitSave(){
      alert(this.state.selectCorrect);
    }
    onclickRedirect(){
        this.setState({redirect: true});
    }
    render() {
        if(this.state.redirect === true){
            redirectTo(`/manager`)
        }

        const dsa = [{ id: "123123", description: "asfsafasfSDas"}, { id: "12423", description: "asfsaafgfasfas"}, { id: "114223", description: "asfsDSafasfas"}];
        let values = dsa.map((e) => {
            return(
                <tr>
                    <th style={{ margin: 0, textAlign: "inherit" }} className="tb tb_column_left">{e.description}</th>
                    <th style={{ margin: 0 }} className="tb tb_column_right"><input checked={this.state.selectCorrect === e.id} onChange={this.radioForm.bind(this, e.id)} type="radio"/></th>
                    <th style={{ margin: 0 }} className="tb tb_column_right"><input onChange={this.checkBoxForm} type="checkbox"/></th>
                </tr>
            );
        });
        const link = `/manager/${this.props.id}/answer`;
        return(
            <div>
                <h1>{this.props.id}</h1>
                <table className="tb">
                    <tr><th className="tb tb_column_left">Answer</th><th className="tb tb_column_right">Correct</th><th className="tb tb_column_right">Delete</th></tr>
                        {values}
                </table>
                <div style={{width: "100%"}}>
                    <Button href={link}>Add Answer</Button>
                </div>
                <input onClick={this.submitSave} style={{ float: "left"}} type="button" value="Save"/>
                <input value="Cancel" type="button" onClick={this.onclickRedirect}/>
            </div>
        )
    }
}
export default(EditQuestion);