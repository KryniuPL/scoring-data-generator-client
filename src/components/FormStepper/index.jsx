import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import {FirstStep} from "./steps/FirstStep";
import {SecondStep} from "./steps/SecondStep";
import {ThirdStep} from "./steps/ThirdStep";
import {useState} from "react";

const initialRange = {min: 0, max: 0};

export const FormStepper = ({initializeGenerator}) => {

    const [activeStep, setActiveStep] = useState(0);
    const [accountsRange, setAccountsRange] = useState(initialRange)
    const [paymentsRange, setPaymentsRange] = useState(initialRange)
    const [producersNumber, setProducersNumber] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setAccountsRange(initialRange)
        setPaymentsRange(initialRange)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        handleNext();
        initializeGenerator({
            accountsRange,
            paymentsRange,
            producersNumber
        });
    }

    return (
        <Box sx={{maxWidth: 400}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <FirstStep
                        handleNext={handleNext}
                        accountsRange={accountsRange}
                        setAccountsRange={setAccountsRange}
                    />
                </Step>
                <Step>
                    <SecondStep
                        handleNext={handleNext}
                        handleBack={handleBack}
                        paymentsRange={paymentsRange}
                        setPaymentsRange={setPaymentsRange}
                    />
                </Step>
                <Step>
                    <ThirdStep
                        handleNext={handleFinish}
                        handleBack={handleBack}
                        producersNumber={producersNumber}
                        setProducersNumber={setProducersNumber}
                    />
                </Step>
            </Stepper>
        </Box>
    );
}


