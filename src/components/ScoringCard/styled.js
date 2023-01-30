import ListItem from "@mui/material/ListItem";
import styled from "styled-components";
import {TextField} from "@mui/material";
import List from "@mui/material/List";

export const StyledListItem = styled(ListItem)`
    text-align: center !important;
    display: flex;
    justify-content: center !important;
`

export const StyledLeftInput = styled(TextField)`
    margin: 0 !important;
    margin-right: 8px !important;
    max-width: 150px;
`

export const StyledRightInput = styled(TextField)`
    margin: 0 !important;
    margin-left: 8px !important;
    max-width: 150px;
`

export const StyledList = styled(List)`
    
`;
