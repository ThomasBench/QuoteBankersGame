import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Suite from './Suite'
import { useContext } from 'react'
import {stepContext} from './Env'
import {Job,Gender,Emotion, Age, Subject, Validation} from './Content_layout'
import Recap from './Recap'
import Score from './Score'
import Welcome from './Welcome'

const Content = () => {
    const context = useContext(stepContext)
    const content_layouts = [Gender(),Age(),Job(),Subject(),Emotion(), Validation()]
    const score_content = Score(context.state.score)
    const welcome_content = Welcome()
    const index = context.state.index 
    const prev_button = (<Grid item ><Button variant="contained" onClick = {() => context.dispatcher({data : context.state, type : 'prev'})}> previous</Button></Grid>)
    let usual_content =  (
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
   )

    return (
        <>
        {index > 0 && prev_button}
       <Grid container direction = "row" alignItems = "center" style = {{"margin" : 'auto'}}   justifyContent="center">
        <Grid item>{index<0 && welcome_content}</Grid>
        <Grid item>{(index<6 && index>=0) && usual_content}</Grid>
       <Grid item>{index === 6 && score_content}</Grid>
       </Grid>
       </>
    )
}

export default Content
