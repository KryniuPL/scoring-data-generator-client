import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {FirstStepContentWrapper} from "./styled";
import {TextField} from "@mui/material";
import {useState} from "react";

export const ClientsChildrenRangeStep = ({handleNext, childrenRange, setChildrenRange}) => {
    const [minInputError, setMinInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);

    const onMinChange = (event) => {
        const min = parseInt(event.target.value);

        if (min < 0 || isNaN(min)) {
            setMinInputError(true);
        } else {
            setMinInputError(false)
            setChildrenRange({...childrenRange, min});
        }
    }

    const onMaxChange = (event) => {
        const max = parseInt(event.target.value);

        if (max < 0 || isNaN(max) || max > 10) {
            setMaxInputError(true);
        } else {
            setMaxInputError(false)
            setChildrenRange({...childrenRange, max});
        }
    }

    const continueHandler = () => {
        const {min, max} = childrenRange;
        if(maxInputError || minInputError) {
            return;
        }
        if ( min > max) {
            setMinInputError(true);
        }
        if (max < min) {
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
                Select range of children
            </StepLabel>
            <FirstStepContentWrapper>
                <Typography>
                    Select range of children which client can have. Final value will be randomly selected from that range.
                    Amount of children have impact on final credit scoring.
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
                            helperText={maxInputError ? "Wrong entry, max number is 10, it has to be greater than min" : undefined}
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
