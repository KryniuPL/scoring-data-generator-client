import {ContentWrapper} from "./styled";
import {GenerationForm} from "../GenerationForm";
import {AnalyticsDashboard} from "../AnalyticsDashboard";
import {useState} from "react";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

export const Content = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const initializeGenerator = (dataGenerationRequest) => {
        return axios.post('/api/init', JSON.stringify(dataGenerationRequest), { headers });
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
