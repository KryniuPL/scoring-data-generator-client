import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {FirstStepContentWrapper} from "./styled";
import {TextField} from "@mui/material";
import {useState} from "react";

export const ThirdStep = ({handleNext, handleBack, producersNumber, setProducersNumber}) => {

    const [showError, setShowError] = useState(false);

    const onProducersNumberChange = (event) => {
        const number = parseInt(event.target.value);

        if (number === 0 || isNaN(number) || number > 10) {
            setShowError(true);
        } else {
            setShowError(false)
            setProducersNumber(number);
        }
    }

    const handleContinue = () => {
        if (producersNumber === 0) {
            setShowError(true);
        } else {
            setShowError(false);
            handleNext();
        }
    }

    return (
        <>
            <StepLabel optional={<Typography variant="caption">Last step</Typography>}>
                Select number of producer instance
            </StepLabel>
            <FirstStepContentWrapper>
                <Typography>
                    Select number of instance which will be producing data continuously
                </Typography>
                <Box sx={{mb: 2, display: 'flex', flexDirection: 'column'}}>

                    <div>
                        <TextField
                            error={showError}
                            size={"small"}
                            margin={"normal"}
                            sx={{minWidth: '50%'}}
                            onChange={onProducersNumberChange}
                            placeholder="Type number here"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText={showError ? "Wrong entry, max number is 10" : undefined}

                        />
                    </div>

                    <Button
                        variant="contained"
                        onClick={handleContinue}
                        sx={{mt: 1, mr: 1}}
                    >
                        Finish
                    </Button>
                    <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button>
                </Box>
            </FirstStepContentWrapper>
        </>
    )
}
