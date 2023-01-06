import {ContentWrapper} from "./styled";
import {GenerationForm} from "../GenerationForm";
import {AnalyticsDashboard} from "../AnalyticsDashboard";
import {useState} from "react";

export const Content = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const initializeGenerator = (dataGenerationRequest) => {
        setShowSuccess(true)
    }

    return (
        <ContentWrapper>
            <GenerationForm showSuccess={showSuccess} initializeGenerator={initializeGenerator}/>
            <AnalyticsDashboard startDisplaying={showSuccess}/>
        </ContentWrapper>
    )
}
