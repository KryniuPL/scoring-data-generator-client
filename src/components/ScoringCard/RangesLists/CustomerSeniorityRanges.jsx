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

export const CustomerSeniorityRanges = () => {
    const [customerSeniorityRange, setCustomerSeniorityRange] = useState(window.scoringCardConfig.customerSeniorityRange);

    const onInputChange = (event, key) => {
        const value = parseInt(event.target.value);
        const newValue = {
            ...customerSeniorityRange,
            [key]: isNaN(value) ? "": value
        };
        setCustomerSeniorityRange(newValue);
        window.scoringCardConfig = {
            ...window.scoringCardConfig,
            customerSeniorityRange: newValue,
        }
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <StyledListItem>
                <span>ACT_CINS_MIN_SENIORITY {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={customerSeniorityRange.firstConditionValue}
                    onChange={(event) => onInputChange(event, "firstConditionValue")}
                    margin={"normal"}
                    sx={{width: '20%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    value={customerSeniorityRange.firstConditionValue}
                    margin={"normal"}
                    disabled={true}
                    sx={{width: '20%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{'<'} ACT_CINS_MIN_SENIORITY {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={customerSeniorityRange.secondConditionValue}
                    onChange={(event) => onInputChange(event, "secondConditionValue")}
                    margin={"normal"}
                    sx={{width: '20%'}}
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
                    value={customerSeniorityRange.secondConditionValue}
                    margin={"normal"}
                    disabled={true}
                    sx={{width: '20%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{'<'} ACT_CINS_MIN_SENIORITY {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    defaultValue={customerSeniorityRange.lastConditionValue}
                    onChange={(event) => onInputChange(event, "lastConditionValue")}
                    margin={"normal"}
                    sx={{width: '20%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <ListItemText primary={`${customerSeniorityRange.lastConditionValue} < ACT_CINS_MIN_SENIORITY`}/>
            </StyledListItem>
        </List>
    )
}
