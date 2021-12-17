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
    const line_jumps = (<><br/><br/><br/><br/></>   )
    const prev_button = (<Grid item ><Button variant="contained" onClick = {() => context.dispatcher({data : context.state, type : 'prev'})}> previous</Button></Grid>)
    let usual_content =  (
    <Grid container item 
        spacing = {2}   
        direction="row"
        justifyContent="space_between"
        alignItems="center"
        >
    <Grid item xs = {3}> <Suite/></Grid>       
    <Grid item xs = {5}>{content_layouts[context.state.index]}</Grid>
    <Grid item xs = {4} ><Recap person = {context.state.carac}/></Grid>
   </Grid>
   )

    return (
        <Grid container direction = "column" justifyContent= "space-between">
            <Grid item xs = {4}>{index > 0 && prev_button}</Grid>
            {(index>=0) && line_jumps}
            <Grid container item direction = "row" alignItems = "center" justifyContent="center" xs ={8}>
                <Grid item>{index<0 && welcome_content}</Grid>

                <Grid item>{(index<6 && index>=0) && usual_content}</Grid>
                <Grid item>{index === 6 && score_content}</Grid>
            </Grid>
       </Grid>
    )
}

export default Content

