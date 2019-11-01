import React, {Component} from 'react'
import Button from "@material-ui/core/Button";
import {redirectTo} from "@reach/router";
import {Redirect} from "react-router";


class AddQuestion extends Component {
   constructor(props){
   super(props);

   this.state = {
       name: "",
       redirect: false,
       cancel: false
   };


   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.onclickRedirect = this.onclickRedirect.bind(this);
   }

   handleSubmit(event){
       event.preventDefault();
       alert("form is submitted " + this.state.name);
       if(this.state.name !== "") {
           this.setState({
               redirect: true
           })
       }
   }


    handleChange(event){
        this.setState({name: event.target.value});
        console.log('email was changed', event.target.value);
    }

    onclickRedirect(){
       this.setState({cancel: true});
    }
    render(){
       if(this.state.redirect === true && this.state.name !== "" || this.state.cancel === true){
           return redirectTo("/manager")
       }

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div style={{width: "100%", marginBottom: 5}}>
                    <input  type="text" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
               <button style={{ float: "left"}}>Create</button>
            </form>
                <button  onClick={this.onclickRedirect}>Cancel</button>
            </div>
        )
    }
}

export default(AddQuestion);