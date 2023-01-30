import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {StyledLeftInput, StyledListItem, StyledRightInput} from "../styled";
import {useState} from "react";

const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'rgb(23,28,36)',
};

export const ChildrenRange = () => {
    const [finishedLoansRange, setFinishedLoansRange] = useState(window.scoringCardConfig.childrenRange);

    const onInputChange = (event, key) => {
        const value = parseInt(event.target.value);
        const newValue = {
            ...finishedLoansRange,
            [key]: isNaN(value) ? "": value
        };
        setFinishedLoansRange(newValue);
        window.scoringCardConfig = {
            ...window.scoringCardConfig,
            childrenRange: newValue,
        }
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <StyledListItem>
                <span>APP_NUMBER_OF_CHILDREN {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={finishedLoansRange.min}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    onChange={(event) => onInputChange(event, "min")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    disabled={true}
                    value={finishedLoansRange.min}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} APP_NUMBER_OF_CHILDREN {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={finishedLoansRange.max}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    onChange={(event) => onInputChange(event, "max")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    disabled={true}
                    value={finishedLoansRange.max}
                    margin={"normal"}
                    sx={{width: '10%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} APP_NUMBER_OF_CHILDREN</span>
            </StyledListItem>
        </List>
    )
}
