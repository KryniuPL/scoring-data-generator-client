import * as React from 'react';
import {ContentWrapper} from "./styled";
import {GenerationForm} from "../GenerationForm";
import {AnalyticsDashboard} from "../AnalyticsDashboard";
import {useEffect, useState} from "react";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

const scoringCardInitialState = {
    "customerLoadRange": {
        "firstConditionValue": 1.0535455861,
        "secondConditionValue": 0.857442348,
        "thirdConditionValue": 0.3324658426,
        "lastConditionValue": 0.248125937
    },
    "customerSeniorityRange": {
        "firstConditionValue": 22,
        "secondConditionValue": 36,
        "lastConditionValue": 119
    },
    "actualLoansRange": {
        "conditionValue": 1
    },
    "finishedLoansRange": {
        "firstConditionValue": 0,
        "secondConditionValue": 1,
        "lastConditionValue": 2
    },
    "childrenRange": {
        "min": 0,
        "max": 1,
    }
}

export const Content = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        window.producerId = "";
        window.generationData = null;
        window.scoringCardConfig = scoringCardInitialState;
    }, [])

    const initializeGenerator = (dataGenerationRequest) => {
        window.generationData = dataGenerationRequest;
        return axios.post('/api/init', JSON.stringify({
            ...dataGenerationRequest,
            scoringCardConfig: window.scoringCardConfig
        }), {headers});
    }

    return (
        <ContentWrapper>
            <GenerationForm
                showSuccess={showSuccess}
                setShowSuccess={setShowSuccess}
                initializeGenerator={initializeGenerator}
            />
            <AnalyticsDashboard startDisplaying={showSuccess}/>
        </ContentWrapper>
    )
}
