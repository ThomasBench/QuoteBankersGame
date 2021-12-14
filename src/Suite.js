import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import React, {useContext} from 'react'
import steps from './steps'
import { stepContext } from './Env'
const Suite = () => {
    const context = useContext(stepContext)
    return (
        <Stepper orientation = 'vertical' activeStep={context.state.index}>
            {steps.map((label,index) =>
                <Step key = {label}>       
                    <StepButton color="inherit" onClick={() => context.dispatcher({type: 'slidClick', data : index})}>
                        Choose your {label} ! 
                    </StepButton>                 
                </Step>
                )
                }
        </Stepper>
    )
}

export default Suite
