import {Wrapper} from "./styled";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ReplayIcon from '@mui/icons-material/Replay';

import {useState} from "react";
import {UpdateParametersModal} from "../UpdateParametersModal";
import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
}

export const GenerationCoordinator = () => {
    const [processingOngoing, setProcessingOngoing] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const buttonHandler = () => {
        setOpenModal(true);
    }

    const stopProcessing = () => {
        axios.get(`/api/stop/${window.producerId}`, { headers })
            .then(() => setProcessingOngoing(false))
    }

    const resumeProcessing = () => {
        axios.get('/api/resume', { headers })
            .then((res) => {
                window.producerId = res.data.producerId;
                setProcessingOngoing(true)
            })
    }

    return (
        <Wrapper>
            <Button variant="outlined" endIcon={<UpgradeIcon />} color={"info"} onClick={buttonHandler}>
                Update parameters
            </Button>
            {processingOngoing ?
                <StopProcessingButton stopProcessing={stopProcessing}/>
                :
                <ResumeProcessingButton resumeProcessing={resumeProcessing}/>
            }
            <UpdateParametersModal open={openModal} setOpen={setOpenModal}/>
        </Wrapper>
    )
}

const StopProcessingButton = ({stopProcessing}) => (
    <Button variant="outlined" endIcon={<CloseIcon />} color={"error"} sx={{ marginTop: '8px'}} onClick={stopProcessing}>
        Stop processing
    </Button>
)

const ResumeProcessingButton = ({resumeProcessing}) => (
    <Button variant="outlined" endIcon={<ReplayIcon />} color={"success"} sx={{ marginTop: '8px'}} onClick={resumeProcessing}>
        Resume processing
    </Button>
)
