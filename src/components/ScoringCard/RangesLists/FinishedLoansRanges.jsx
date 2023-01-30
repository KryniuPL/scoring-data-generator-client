import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {StyledLeftInput, StyledListItem, StyledRightInput} from "../styled";
import {useState} from "react";

const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'rgb(23,28,36)',
};

export const FinishedLoansRanges = () => {
    const [finishedLoansRange, setFinishedLoansRange] = useState(window.scoringCardConfig.finishedLoansRange);

    const onInputChange = (event, key) => {
        const value = parseFloat(event.target.value);
        const newValue = {
            ...finishedLoansRange,
            [key]: isNaN(value) ? "": value
        };
        setFinishedLoansRange(newValue);
        window.scoringCardConfig = {
            ...window.scoringCardConfig,
            finishedLoansRange: newValue,
        }
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <StyledListItem>
                <span>ACT_CINS_N_STATC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={finishedLoansRange.firstConditionValue}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    onChange={(event) => onInputChange(event, "firstConditionValue")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    disabled={true}
                    value={finishedLoansRange.firstConditionValue}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} ACT_CINS_N_STATC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={finishedLoansRange.secondConditionValue}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    onChange={(event) => onInputChange(event, "secondConditionValue")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <ListItemText primary={`Missing`}/>
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    disabled={true}
                    value={finishedLoansRange.secondConditionValue}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} ACT_CINS_N_STATC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={finishedLoansRange.lastConditionValue}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    onChange={(event) => onInputChange(event, "lastConditionValue")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <ListItemText primary={`${finishedLoansRange.lastConditionValue} < ACT_CINS_N_STATC`}/>
            </StyledListItem>
        </List>
    )
}
