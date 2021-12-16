import { Button } from '@mui/material'
import React from 'react'
import { useContext} from 'react'
import {stepContext} from './Env'
const Welcome = () => {
    const context = useContext(stepContext)
    const git_url = "https://github.com/epfl-ada/ada-2021-project-quotebankers"
    return (
        <div>
        <Button variant = "contained" onClick ={() => window.open(git_url, "_blank")}>github</Button>
        <Button  variant = "contained" onClick ={() => context.dispatcher({type: 'go', data : ""})}>Let's GO !</Button>
        </div>
    )
}

export default Welcome
