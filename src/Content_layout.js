import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useContext , useState} from 'react'
import {stepContext} from './Env'
import Slider from '@mui/material/Slider'
import { Card, CardContent, CardHeader, Typography, CircularProgress } from '@mui/material'

const jobs = ['politician', 'athlete', 'actor', 'lawyer', 'researcher', 'journalist', 'musician', 'businessperson']
const subjects  = [ "art", "sport", "economy & finance", "politics", "health & science"]
const emotions = ['happy', 'sad', 'fear', 'anger', "neutral"]
const loading_spinner = (<CircularProgress size = {50}></CircularProgress>)

function handle_promise(dispatcher, p){
    let url = new URL('https://calm-scrubland-87302.herokuapp.com/predict/')
    const params = p
    dispatcher({type : 'sendVal', data : true})
    url.search = new URLSearchParams(params).toString();
    fetch(url)
        .then(response => response.json())
        .then(data =>  dispatcher({type: "validation", data: data.score}))
}
const Job = () => {
    const context = useContext(stepContext)
    return (
        <Grid container direction = "column"   justifyContent="center"  alignItems="center" spacing = {0} >
            <Grid item><Typography variant = "h5" align ="center"> Choose your job: </Typography> </Grid>
            <Grid item><br/></Grid>
            <Grid item><br/></Grid>            <Grid container item spacing  = {2}             direction="row"
            justifyContent="space-between"
            alignItems="center">
                {jobs.map(
                    (job) => (<Grid item ><Button variant="contained" onClick = {() => context.dispatcher({type: 'job', data: job })}>{job}</Button></Grid>)
                )}
            </Grid>
        </Grid>
    )
}

const Gender = () => {
    const context = useContext(stepContext)
    return (
        <Grid container direction = "column"   justifyContent="center"  alignItems="space-around" spacing = {0} >
            <Grid item><Typography variant = "h5" align ="center"> Choose your gender: </Typography> </Grid>
            <Grid item><br/></Grid>
            <Grid item><br/></Grid>
            <Grid container item spacing  = {1}>    
                <Grid item>
                    <Button variant="contained" onClick = {() => context.dispatcher({type: 'gender', data: 'male' })}>Male</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick = {() => context.dispatcher({type: 'gender', data: 'female' })}>Female</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick = {() => context.dispatcher({type: 'gender', data: 'other' })}>Other</Button>
                </Grid>
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
        <Grid container direction = "column"   justifyContent="center"  alignItems="center" spacing = {0} >
            <Grid item><Typography variant = "h5" align ="center"> Choose your age: </Typography> </Grid>
            <Grid item><br/></Grid>
            <Grid item><br/></Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <CardHeader></CardHeader>
                        <Slider  defaultValue = {20} step = {1} min  = {15} max = {80}  valueLabelDisplay="on" onChange={(val) => handleSliderChange(val)}/>
                        <Typography>You are {age} years old</Typography>
                        <Button variant="contained" onClick = {() => context.dispatcher({type: 'age', data: age })}>Validate</Button>
                    </CardContent>
                </Card> 
            </Grid> 
        </Grid>
    )
}

const Subject = () => {
    const context = useContext(stepContext)
    return (
        <Grid container direction = "column"   justifyContent="center"  alignItems="center" spacing = {0} >
            <Grid item><Typography variant = "h5" align ="center"> Choose your subject: </Typography> </Grid>
            <Grid item><br/></Grid>
            <Grid item><br/></Grid>            
            <Grid container item spacing  = {2}>
                {subjects.map(
                    (sub) => (<Grid item><Button variant="contained" onClick = {() => context.dispatcher({type: 'subject', data: sub })}>{sub}</Button></Grid>)
                )}
            </Grid>
        </Grid>
    )
}
const Emotion = () => {
    const context = useContext(stepContext)
    return (
        <Grid container direction = "column"   justifyContent="center"  alignItems="center" spacing = {0} >

            <Grid item><Typography variant = "h5" align ="center"> Choose your emotion: </Typography> </Grid>
            <Grid item><br/></Grid>
            <Grid item><br/></Grid>
            <Grid container item spacing  = {2}>
                {emotions.map(
                    (emo) => (<Grid item><Button  variant="contained" onClick = {() => context.dispatcher({type: 'emotion', data: emo })}>{emo}</Button></Grid>)
                )}
            </Grid>
        </Grid>
    )
}

const Validation = () => {
    const context = useContext(stepContext)
    const person = context.state.carac
    const loading = context.state.isLoading
    const valButton = (<Button variant="contained" onClick = {() => handle_promise(context.dispatcher, person)} >Validate ! </Button>) 

    return (
        <>
        <Typography>
            You are a {person.age} year old {person.job}. You identify yourself as a {person.gender} and would like to talk about {person.subject} with {person.emotion} feelings.
        </Typography>
        <Typography>
            Is that who you are ? 
        </Typography>
        <br/>
        <br/>   
        {loading ? loading_spinner : valButton}
        </>
    )
}
export {Job,Gender,Age, Subject, Emotion, Validation}
