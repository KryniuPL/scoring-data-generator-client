import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const GenerationFormWrapper = styled(Card)`
    min-height: 600px;
    min-width: 275px;
    max-width: 600px;
    margin: 50px;
    background-color: rgb(34, 43, 54) !important;
`

export const StyledCardContent = styled(CardContent)`
    display: flex;
    padding: 0 !important;
    flex-direction: column;
    height: 100%;
`
