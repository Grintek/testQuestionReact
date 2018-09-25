import React from 'react';
import Button from "@material-ui/core/Button";
import {red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

export const ButtonAdmin = () =>{
    const value = window.localStorage.getItem('vk_login');
    console.log(window.localStorage.getItem('vk_login'));
    if(value === 'true') {
        return (
            <Typography>
                <Button href="/admin" color="primary" style={{backgroundColor: red[200]}}>Admin</Button>
            </Typography>
        );
    }else {
        return <p>zalogintes</p>;
    }
};