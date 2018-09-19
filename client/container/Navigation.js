import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {blue, red} from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

export default function Navigation() {
    const sty = {background: blue[100], paddingTop: 10, paddingBottom: 10};
    return(
        <Toolbar style={sty}>
        <Typography>
            <Button href="/" color="primary" style={{backgroundColor: red[200]}}>Home</Button>
        </Typography>
            <Typography>
                <Button href="/login" color="primary" style={{backgroundColor: red[200]}}>Login</Button>
            </Typography>
            <Typography>
                <Button href="/admin" color="primary" style={{backgroundColor: red[200]}}>Admin</Button>
            </Typography>
    </Toolbar>
    );
}