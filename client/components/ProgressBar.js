import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {pink} from '@material-ui/core/colors';

export default function progressBar() {
        return <LinearProgress mode="indeterminate" color="secondary" />;
}
