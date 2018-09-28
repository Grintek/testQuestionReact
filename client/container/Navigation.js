import React from 'react';
import {Redirect} from '@reach/router';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {blue, red} from "@material-ui/core/colors";
import {ButtonAdmin} from './ButtonAdmin';
import ButtonLogout from './ButtonLogout';
import Paper from "@material-ui/core/Paper";

export default function Navigation() {
    const sty = {background: blue[100], paddingTop: 10, paddingBottom: 10};
    const value = window.localStorage.getItem('vk_login');
    return(
        <div>
        <Toolbar style={sty}>
        <Typography>
            <Button href="/home" color="primary" style={{backgroundColor: red[200]}}>Home</Button>
        </Typography>
            <Typography>
                <Button href="/login" color="primary" style={{backgroundColor: red[200]}}>Login</Button>
            </Typography>
            <ButtonAdmin/>
            <div style={{float: 'right'}}>
                <ButtonLogout />
            </div>
        </Toolbar>
        </div>

    );
}