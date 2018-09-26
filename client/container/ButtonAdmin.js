import React from 'react';
import Button from "@material-ui/core/Button";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

export const ButtonAdmin = () =>{
    const value = window.localStorage.getItem('vk_login');
    console.log(window.localStorage.getItem('vk_login'));
    let template;
    if(value !== 'true') {
        template = { display: "none" };
    }else{
        template = {backgroundColor: red[200]};
    }

    return(
        <Typography><Button href="/admin" color="primary" style={template}>Admin</Button></Typography>
    );

};