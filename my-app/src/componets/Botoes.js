import * as React from 'react';
import {  Button, Grid } from '@mui/material';



export function Botao(props) {
    return (
        <Grid item xs={3}>
            <Button fullWidth variant='outlined' onClick = {() => props.operacao(props.valor)}>
                {props.valor} 
            </Button>
        </Grid>
    )    
};