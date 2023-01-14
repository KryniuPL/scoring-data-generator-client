import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import {GenerationFormWrapper} from "./styled";
import {FormStepper} from "../FormStepper";
import {SuccessToast} from "../Toasts/SuccessToast";
import {ErrorToast} from "../Toasts/ErrorToast";
import {useState} from "react";

export const GenerationForm = ({showSuccess, setShowSuccess, initializeGenerator}) => {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <GenerationFormWrapper>
            <CardContent>
                <FormStepper
                    setShowError={setShowError}
                    setErrorMessage={setErrorMessage}
                    setShowSuccess={setShowSuccess}
                    initializeGenerator={initializeGenerator}
                />
                {showSuccess && <SuccessToast />}
                {showError && <ErrorToast message={errorMessage}/>}
            </CardContent>
        </GenerationFormWrapper>
    )
}
