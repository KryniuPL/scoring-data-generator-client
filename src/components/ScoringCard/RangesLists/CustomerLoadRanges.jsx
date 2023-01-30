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

export const CustomerLoadRanges = () => {
    const [customerLoadRange, setCustomerLoadRange] = useState(window.scoringCardConfig.customerLoadRange);

    const onInputChange = (event, key) => {
        const value = parseFloat(event.target.value);
        const newValue = {
            ...customerLoadRange,
            [key]: isNaN(value) ? "": value
        };
        setCustomerLoadRange(newValue);
        window.scoringCardConfig = {
            ...window.scoringCardConfig,
            customerLoadRange: newValue,
        }
    }

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <StyledListItem>
                    <StyledLeftInput
                        size={"small"}
                        defaultValue={customerLoadRange.firstConditionValue}
                        margin={"normal"}
                        sx={{width: '40%'}}
                        onChange={(event) => onInputChange(event, "firstConditionValue")}
                        inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                    />
                    <span>{`<`} ACT_CC</span>
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    defaultValue={customerLoadRange.secondConditionValue}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    onChange={(event) => onInputChange(event, "secondConditionValue")}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} ACT_CC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    disabled={true}
                    value={customerLoadRange.firstConditionValue}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    defaultValue={customerLoadRange.thirdConditionValue}
                    onChange={(event) => onInputChange(event, "thirdConditionValue")}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} ACT_CC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    disabled={true}
                    value={customerLoadRange.secondConditionValue}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <StyledLeftInput
                    size={"small"}
                    defaultValue={customerLoadRange.lastConditionValue}
                    onChange={(event) => onInputChange(event, "lastConditionValue")}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
                <span>{`<`} ACT_CC {`<=`}</span>
                <StyledRightInput
                    size={"small"}
                    disabled={true}
                    value={customerLoadRange.thirdConditionValue}
                    margin={"normal"}
                    sx={{width: '40%'}}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                />
            </StyledListItem>
            <Divider/>
            <StyledListItem>
                <ListItemText primary={`ACT_CC <= ${customerLoadRange.lastConditionValue}`}/>
            </StyledListItem>
        </List>
    )
}
