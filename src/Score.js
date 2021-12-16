import React from 'react'
import { Typography, Grid, Button} from '@mui/material'
import Rectangle from './Rectangle'
const text_dicts = {
    1: (
        <>
        <Typography variant= "h2">
            Too bad,
                <span>&#128531;</span> 
            you will likely be quoted between 0 and 10 times.
        </Typography>
        <Typography variant = "body1">
            That is kind of the worse you could expect...
            <br/>Want to know why ? Click on the Learn More button ! 
        </Typography>
        </>
    ),
    2: (
        <>
        <Typography variant= "h2">
            Kind of ok,
                <span>&#128529;</span> 
            you will likely be quoted between 10 and 100 times.
        </Typography>
        <Typography variant = "body1">
            Not too bad, but some people are more vocal than you could by beeing who you are, and what you talk about...
            <br/>Want to know why ? Click on the Learn More button ! 
        </Typography>
        </>
    ),
    3: (
        <>
        <Typography variant= "h2">
            That's cool !
                <span>&#128523;</span> 
            you will likely be quoted between 100 and 1000 times.
        </Typography>
        <Typography variant = "body1">
            You are starting to understand who you have to be, what to say and how to say it to be heard by the world ! 
            <br/>Want to know why ? Click on the Learn More button ! 
        </Typography>
        </>
    ),
    4: (
        <>
        <Typography variant= "h2">
            Simply perfect   <span>&#128526;</span> 
            you will likely be quoted more than 1000 times.
        </Typography>
        <Typography variant = "body1">
            You are everything to be the most influent person in the world. You may even be already quoted by a famous newspaper...
            <br/>Want to know why ? Click on the Learn More button ! 
        </Typography>
        </>
    ),
}
const colors = {
    1: "#ED2938",
    2: "#FF8C01",
    3: "#FFE733",
    4: "#006B3E"
}
const Score = (score) => {
    const button_style = {
        'textTransform': 'none',
        'backgroundColor': colors[score],
        "margin": "auto",
        "fontSize": '20px'


    }
    return (
        <>
        <Grid container direction = "row" spacing = {2}   alignItems="center" >
            <Grid item xs = {2}><Rectangle score = {score} color = {colors[score]}></Rectangle> </Grid>
            <Grid item xs = {10}>{text_dicts[score]}</Grid>
        </Grid>
        <Button variant = "contained" size = "large" style = {button_style}>Learn More : </Button>
        </>
    )
    
}

export default Score
