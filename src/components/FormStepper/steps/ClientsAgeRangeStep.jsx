import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {FirstStepContentWrapper} from "./styled";
import {TextField} from "@mui/material";
import {useState} from "react";

export const ClientsAgeRangeStep = ({handleNext, clientsAgeRange, setClientsAgeRange}) => {
    const [minInputError, setMinInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);

    const onMinChange = (event) => {
        const min = parseInt(event.target.value);

        if (min < 18 || isNaN(min)) {
            setMinInputError(true);
        } else {
            setMinInputError(false)
            setClientsAgeRange({...clientsAgeRange, min});
        }
    }

    const onMaxChange = (event) => {
        const max = parseInt(event.target.value);

        if (max === 0 || isNaN(max) || max > 100) {
            setMaxInputError(true);
        } else {
            setMaxInputError(false)
            setClientsAgeRange({...clientsAgeRange, max});
        }
    }

    const continueHandler = () => {
        const {min, max} = clientsAgeRange;
        if(maxInputError || minInputError) {
            return;
        }
        if (min === 0 || min > max) {
            setMinInputError(true);
        }
        if (max === 0 || max < min) {
            setMaxInputError(true);
            return;
        }
        setMinInputError(false);
        setMaxInputError(false);
        handleNext();
    }


    return (
        <>
            <StepLabel>
                Select client's age range
            </StepLabel>
            <FirstStepContentWrapper>
                <Typography>
                    Select range of possible client's age. Age is an important parameter, martial status scoring or job type scoring will be
                    calculated based on its value.
                </Typography>
                <Box sx={{mb: 2, display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <TextField
                            error={minInputError}
                            size={"small"}
                            margin={"normal"}
                            sx={{width: '40%'}}
                            placeholder="Min"
                            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            onChange={onMinChange}
                            helperText={minInputError ? "Wrong entry, min number is 18, it has to be smaller than max" : undefined}
                        />
                        <TextField
                            error={maxInputError}
                            size={"small"}
                            margin={"normal"}
                            sx={{width: '40%', marginLeft: '16px'}}
                            placeholder="Max"
                            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            onChange={onMaxChange}
                            helperText={maxInputError ? "Wrong entry, max number is 100, it has to be greater than min" : undefined}
                        />
                    </div>

                    <Button
                        variant="contained"
                        onClick={continueHandler}
                        sx={{mt: 1, mr: 1}}
                    >
                        Continue
                    </Button>
                </Box>
            </FirstStepContentWrapper>
        </>
    )
}
