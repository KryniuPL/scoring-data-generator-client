import * as React from 'react';
import {ContentWrapper} from "./styled";
import {GenerationForm} from "../GenerationForm";
import {AnalyticsDashboard} from "../AnalyticsDashboard";
import {useEffect, useState} from "react";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

export const Content = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        window.producerId = "";
        window.generationData = null;
    }, [])

    const initializeGenerator = (dataGenerationRequest) => {
        window.generationData = dataGenerationRequest;
        return axios.post('/api/init', JSON.stringify(dataGenerationRequest), {headers});
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
