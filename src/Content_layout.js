import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useContext , useState} from 'react'
import {stepContext} from './Env'
import Slider from '@mui/material/Slider'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'

const jobs = ['Politician', 'Football player', 'Actor', 'Lawyer', 'Genius']
const subjects  = ["Politics", 'Sports', 'Culture', 'World News', 'Rap music']
const emotions = ['happiness', 'sadness', 'fear', 'anger']
function sendData(p){
    // let url = new URL('http://127.0.0.1:5000/predict/')
    // const params = p
    // url.search = new URLSearchParams(params).toString();
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    window.location.href='https://quotebankers.github.io/'
}
const Job = () => {
    const context = useContext(stepContext)
    return (
        <Grid container spacing  = {1}             direction="row"
        justifyContent="space-between"
        alignItems="center">
            {jobs.map(
                (job) => (<Grid item ><Button variant="contained" onClick = {() => context.dispatcher({type: 'job', data: job })}>{job}</Button></Grid>)
            )}
        </Grid>
    )
}

const Gender = () => {
    const context = useContext(stepContext)
    return (
        <Grid container spacing  = {2}>
            <Grid item>
                <Button variant="contained" onClick = {() => context.dispatcher({type: 'gender', data: 'M' })}>Male</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick = {() => context.dispatcher({type: 'gender', data: 'F' })}>Female</Button>
            </Grid>



        </Grid>
    )
}

const Age = () => {
    const context = useContext(stepContext)
    const [age, setAge] = useState(20)
    function handleSliderChange(e){
        setAge(e.target.value)
    }
    return (
        <Grid container spacing  = {2}>
            <Grid item>
                <Card>
                    <CardHeader title = {'Choose your age ! '}/>
                    <CardContent>
                        <Typography>You are {age} years old</Typography>
                        <Slider  defaultValue = {20} step = {1} min  = {13} max = {130}  valueLabelDisplay="on" onChange={(val) => handleSliderChange(val)}/>
                        <Button variant="contained" onClick = {() => context.dispatcher({type: 'age', data: age })}>Validate</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                
            </Grid>
        </Grid>
    )
}

const Subject = () => {
    const context = useContext(stepContext)
    return (
        <Grid container spacing  = {2}>
            {subjects.map(
                (sub) => (<Grid item><Button variant="contained" onClick = {() => context.dispatcher({type: 'subject', data: sub })}>{sub}</Button></Grid>)
            )}
        </Grid>
    )
}
const Emotion = () => {
    const context = useContext(stepContext)
    return (
        <Grid container spacing  = {2}>
            {emotions.map(
                (emo) => (<Grid item><Button  variant="contained" onClick = {() => context.dispatcher({type: 'emotion', data: emo })}>{emo}</Button></Grid>)
            )}
        </Grid>
    )
}

const Validation = () => {
    const context = useContext(stepContext)
    const person = context.state.carac
    return (
        <>
        <Typography>
            You are a {person.age} year old {person.job}. You identify yourself as a {person.gender} and would like to talk about {person.subject} with {person.emotion} feelings.
        </Typography>
        <Typography>
            Is that who you are ? 
        </Typography>
        <Button variant="contained" onClick = {() => sendData(person)} >Validate ! </Button>
        </>
    )
}
export {Job,Gender,Age, Subject, Emotion, Validation}
