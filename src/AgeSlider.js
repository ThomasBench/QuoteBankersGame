import React from 'react'
import Slider from '@mui/material/Slider'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
// import
const AgeSlider = () => {
    return (
        <Grid container >
            <Grid item >
                <Card>
                    <CardHeader title = {'Choose your age ! '}/>
                    <CardContent>
                        <Typography>You are 50 years old</Typography>
                        <Slider/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>

            </Grid>

        </Grid>
    )
}

export default AgeSlider
