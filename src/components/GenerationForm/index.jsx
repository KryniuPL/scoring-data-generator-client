import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import {GenerationFormWrapper} from "./styled";
import {FormStepper} from "../FormStepper";
import {useState} from "react";
import {SuccessToast} from "../SuccessToast";

export const GenerationForm = ({showSuccess, initializeGenerator}) => {
    return (
        <GenerationFormWrapper>
            <CardContent>
                <FormStepper initializeGenerator={initializeGenerator}/>
                {showSuccess && <SuccessToast />}
            </CardContent>
        </GenerationFormWrapper>
    )
}
