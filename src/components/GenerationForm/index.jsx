import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import {GenerationFormWrapper, StyledCardContent} from "./styled";
import {FormStepper} from "../FormStepper";
import {SuccessToast} from "../Toasts/SuccessToast";
import {ErrorToast} from "../Toasts/ErrorToast";
import {useState} from "react";
import {GenerationCoordinator} from "../GenerationCoordinator";

export const GenerationForm = ({showSuccess, setShowSuccess, initializeGenerator}) => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <GenerationFormWrapper>
            <StyledCardContent>
                <FormStepper
                    setShowError={setShowError}
                    setErrorMessage={setErrorMessage}
                    setShowSuccess={setShowSuccess}
                    initializeGenerator={initializeGenerator}
                />
                {showSuccess && <GenerationCoordinator />}
                {showSuccess && <SuccessToast message={"Data generation started! Real time date will be provided on the right side"}/>}
                {showError && <ErrorToast message={errorMessage}/>}
            </StyledCardContent>
        </GenerationFormWrapper>
    )
}
