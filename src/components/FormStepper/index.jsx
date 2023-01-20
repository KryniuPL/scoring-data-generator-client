import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import {NumberOfAccountsStep} from "./steps/NumberOfAccountsStep";
import {NumberOfPaymentsStep} from "./steps/NumberOfPaymentsStep";
import {NumberOfInstanceStep} from "./steps/NumberOfInstanceStep";
import {useState} from "react";
import {ClientsAgeRangeStep} from "./steps/ClientsAgeRangeStep";
import {ClientsChildrenRangeStep} from "./steps/ClientsChildrenRangeStep";

const initialRange = {min: 0, max: 0};

export const FormStepper = ({initializeGenerator, setShowSuccess, setShowError, setErrorMessage}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [accountsRange, setAccountsRange] = useState(initialRange)
    const [paymentsRange, setPaymentsRange] = useState(initialRange)
    const [clientsAgeRange, setClientsAgeRange] = useState(initialRange)
    const [childrenRange, setChildrenRange] = useState(initialRange)

    // Does not take part into process, omit it
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
        const payload = {
            accountsRange,
            paymentsRange,
            clientsAgeRange,
            childrenRange
        }

        initializeGenerator(payload)
            .then((res) => {
                window.producerId = res.data.producerId;
                setShowSuccess(true)
            })
            .catch((error) => {
                setShowError(true)
                setErrorMessage(error.message)
                handleReset()
            });
    }

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{maxWidth: 400, padding: '16px'}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <NumberOfAccountsStep
                        handleNext={handleNext}
                        accountsRange={accountsRange}
                        setAccountsRange={setAccountsRange}
                    />
                </Step>
                <Step>
                    <NumberOfPaymentsStep
                        handleNext={handleNext}
                        handleBack={handleBack}
                        paymentsRange={paymentsRange}
                        setPaymentsRange={setPaymentsRange}
                    />
                </Step>
                <Step>
                    <ClientsAgeRangeStep
                        handleNext={handleNext}
                        clientsAgeRange={clientsAgeRange}
                        setClientsAgeRange={setClientsAgeRange}
                    />
                </Step>
                <Step>
                    <ClientsChildrenRangeStep
                        handleNext={handleNext}
                        childrenRange={childrenRange}
                        setChildrenRange={setChildrenRange}
                    />
                </Step>
                <Step>
                    <NumberOfInstanceStep
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


