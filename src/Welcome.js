import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useContext} from 'react'
import {stepContext} from './Env'
import img from './welcome_img.png'
const Welcome = () => {
    const context = useContext(stepContext)
    const git_url = "https://linktr.ee/QuoteBankers"
    const style = {
        transformText: 'none',
        fontSize : '30px',
        borderRadius : '18px'
    }
    return (
        <Grid container direction = 'column' justifyContent = "space-around" >
            <Grid item ><img src={img} alt = "welcome" style = {{height: "400px", width:'650px', borderRadius : '15px'}}/></Grid>
            <br/>
            <Grid item >
                <Typography align = "center">
                    Do you feel like your voice is never be heared ? <br/>
                    Do you want to know why some people are always showcased on tv, newspaper, or the radio ? <br/>
                    Then do this simulation to know how likely you are to be heared, and more precisely why...
                </Typography>
            </Grid>
        <br/>
        <br/>
            <Grid container item direction = 'row' justifyContent = "space-around">
                <Grid item ><Button style = {style} variant = "contained" onClick ={() => window.open(git_url, "_blank")}>github</Button></Grid>
                <Grid item><Button style = {style} variant = "contained" onClick ={() => context.dispatcher({type: 'go', data : ""})}>Let's GO !</Button></Grid>
            </Grid>
        </Grid>
    )
}

export default Welcome
