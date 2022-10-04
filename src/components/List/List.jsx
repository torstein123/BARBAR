import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    return (

        <div className={classes.container}>
            <Typography variant='h4'>Finn de beste barene der du er!</Typography>

            </Typography>
        
    </div>
    );
}

export default List