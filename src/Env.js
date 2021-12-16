import * as React from 'react'
import { useReducer } from 'react'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'
import Content from './Content'
function handleSteps(state, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'prev':
            newState.index = state.index -1;
            break;
        case 'slidClick':
            newState.index= action.data
            break;
        case 'validation':
            newState.score = action.data
            newState.index = state.index +1;
            break;
        default:
            newState.index = state.index +1;
            newState.carac[action.type] = action.data
            break;
    }
    return newState
}

const initialState = {index: -1, carac : {age: 0, gender : '', job: '', subject : '', emotion: ''}, score : 0 }
const stepContext = React.createContext()
const Env = () => {
    const [state,dispatcher] = useReducer(handleSteps, initialState)
    return (
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="center">
            <Grid item >
                <h1>Who has a voice in the media?</h1>
                <h3>An EPFL student project for the best course ever</h3>
            </Grid>
            <Grid item>
                <Paper elevation = {3} style = {{height: "60vh",width: "80vw", margin: 'auto', padding : 15,display : 'block', verticalAlign : 'middle'}}>
                    <stepContext.Provider value = {{state, dispatcher}}><Content/></stepContext.Provider>
                </Paper>
            </Grid>
        </Grid>
    )
}
export {stepContext}
export default Env
