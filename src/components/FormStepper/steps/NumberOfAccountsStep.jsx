import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {FirstStepContentWrapper} from "./styled";
import {TextField} from "@mui/material";
import {useState} from "react";

export const NumberOfAccountsStep = ({handleNext, accountsRange, setAccountsRange}) => {

    const [minInputError, setMinInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);

    const onMinChange = (event) => {
        const min = parseInt(event.target.value);

        if (min === 0 || isNaN(min)) {
            setMinInputError(true);
        } else {
            setMinInputError(false)
            setAccountsRange({...accountsRange, min});
        }
    }

    const onMaxChange = (event) => {
        const max = parseInt(event.target.value);

        if (max === 0 || isNaN(max) || max > 5) {
            setMaxInputError(true);
        } else {
            setMaxInputError(false)
            setAccountsRange({...accountsRange, max});
        }
    }

    const continueHandler = () => {
        const {min, max} = accountsRange;
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
                Select number of accounts
            </StepLabel>
            <FirstStepContentWrapper>
                <Typography>
                    Select range of accounts for each client. Number of accounts for client will be generated
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
                            helperText={minInputError ? "Wrong entry, min number is 1, it has to be smaller than max" : undefined}
                        />
                        <TextField
                            error={maxInputError}
                            size={"small"}
                            margin={"normal"}
                            sx={{width: '40%', marginLeft: '16px'}}
                            placeholder="Max"
                            inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                            onChange={onMaxChange}
                            helperText={maxInputError ? "Wrong entry, max number is 5, it has to be greater than min" : undefined}
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
