import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {StyledLeftInput, StyledListItem} from "../styled";
import {useState} from "react";

const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'rgb(23,28,36)',
};

export const ActualLoansRanges = () => {
    const [actualLoansRange, setActualLoansRange] = useState(window.scoringCardConfig.actualLoansRange)

    const onInputChange = (event, key) => {
        const value = parseInt(event.target.value);
        const newValue = {
            ...actualLoansRange,
            [key]: isNaN(value) ? "": value
        };
        setActualLoansRange(newValue);
        window.scoringCardConfig = {
            ...window.scoringCardConfig,
            actualLoansRange: newValue,
        }
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    defaultValue={actualLoansRange.conditionValue}
                    onChange={(event) => onInputChange(event, "conditionValue")}
                    margin={"normal"}
                    sx={{width: '20%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{'<'} ACT_CINS_N_LOAN</span>
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <ListItemText primary={`ACT_CINS_N_LOAN <= ${actualLoansRange.conditionValue}`}/>
            </StyledListItem>
        </List>
    )
}
