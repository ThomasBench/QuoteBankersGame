import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material'
import  song from "./who_are_you.ogg";
const audioFile = new Audio(song);
audioFile.currentTime = 22
const SoundButton = () => {
    const [state, setstate] = useState(true)
    const playSound = () => {
        console.log(state)
        if (state){
            audioFile.play()
        } else {
            audioFile.pause()
        }
        setstate(!state)
    }
    return (

        <Button
            onClick={() => playSound()}
            variant="contained"
            color="primary"
        >
        Appropriate song
        </Button>
    )
}

export default SoundButton
