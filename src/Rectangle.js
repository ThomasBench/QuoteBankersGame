import React from 'react'
import { Grid, Typography } from '@mui/material'
const Rectangle = (props) => {
    const style = (score) => {
        const color =  score < props.score ? props.color : 'grey' 
        return {'backgroundColor' : color,
        'height':'70px',
        'width' : '45px',
        "borderRadius" : '10px',
        "margin" : '5px',}

    }
    return (
        <Grid container direction = "column">
            <Grid item><Typography variant = {"h5"}>Score :</Typography></Grid>
            <Grid item> <div style = {style(3)}></div></Grid>
            <Grid item> <div style = {style(2)}></div></Grid>
            <Grid item> <div style = {style(1)}></div></Grid>
            <Grid item> <div style = {style(0)}></div></Grid>
        </Grid>
    )
}

export default Rectangle
