import {ContentWrapper} from "./styled";
import {GenerationForm} from "../GenerationForm";
import {AnalyticsDashboard} from "../AnalyticsDashboard";
import {useState} from "react";
import axios from "axios";

export const Content = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const initializeGenerator = (dataGenerationRequest) => {
        axios.post('/api/initialize', dataGenerationRequest)
            .then(response => console.log(response))
        setShowSuccess(true)
    }

    return (
        <ContentWrapper>
            <GenerationForm showSuccess={showSuccess} initializeGenerator={initializeGenerator}/>
            <AnalyticsDashboard startDisplaying={showSuccess}/>
        </ContentWrapper>
    )
}
