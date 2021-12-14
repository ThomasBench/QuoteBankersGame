import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Suite from './Suite'
import { useContext } from 'react'
import {stepContext} from './Env'
import {Job,Gender,Emotion, Age, Subject, Validation} from './Content_layout'
import Recap from './Recap'

const Content = () => {
    const context = useContext(stepContext)
    const content_layouts = [Gender(),Age(),Job(),Subject(),Emotion(), Validation()]
    const index = context.state.index 
    const prev_button = (<Grid item ><Button variant="contained" onClick = {() => context.dispatcher({data : context.state, type : 'prev'})}> previous</Button></Grid>) 

    return (
       <>
        <Grid container 
            spacing = {2}   
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            >
        <Grid item xs = {3}> <Suite/></Grid>       
        <Grid item xs = {4}>{content_layouts[context.state.index]}</Grid>
        <Grid item xs = {4} ><Recap person = {context.state.carac}/></Grid>
        
       </Grid>
       {index !== 0 && prev_button}
       </>
    )
}

export default Content
