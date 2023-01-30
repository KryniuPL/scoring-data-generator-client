import Modal from "@mui/material/Modal";
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Paper from "@mui/material/Paper";
import {CustomerLoadRanges} from "./RangesLists/CustomerLoadRanges";
import {CustomerSeniorityRanges} from "./RangesLists/CustomerSeniorityRanges";
import styled from "styled-components";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {ScoringList} from "./ScoringList";
import {ActualLoansRanges} from "./RangesLists/ActualLoansRanges";
import {FinishedLoansRanges} from "./RangesLists/FinishedLoansRanges";
import axios from "axios";
import {useState} from "react";
import {SuccessToast} from "../Toasts/SuccessToast";
import {ErrorToast} from "../Toasts/ErrorToast";
import {ChildrenRange} from "./RangesLists/ChildrenRange";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    color: 'white',
    bgcolor: 'rgb(23,28,36)',
    border: '2px solid #ffa726',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
    maxHeight: '700px'
};

const Wrapper = styled.div`
`

const createData = (scoringName, scoringPoints) => {
    return {scoringName, scoringPoints};
}

const createRowsData = () => {
    return [
        createData('Customer Load Scoring', [-1, 29, 40, 49, 61]),
        createData('Customer Seniority Scoring', [-1, 50, 53, 76, 99]),
        createData('Actual Loans Scoring', [-1, 57]),
        createData('Finished Loans Scoring', [-1, 49, 49, 54, 87]),
        createData('Children Scoring', [-1, 23, 57]),
    ];
}
const headers = {
    'Content-Type': 'application/json',
}

const renderRanges = (key) => {
    if (key === 'Customer Load Scoring') {
        return <CustomerLoadRanges/>
    } else if (key === 'Customer Seniority Scoring') {
        return <CustomerSeniorityRanges/>
    } else if (key === 'Actual Loans Scoring') {
        return <ActualLoansRanges/>
    } else if (key === 'Finished Loans Scoring') {
        return <FinishedLoansRanges/>
    } else if (key === 'Children Scoring') {
        return <ChildrenRange/>
    }
}

export const ScoringCardModal = ({open, setOpen}) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleAccept = () => {
        axios.post('/api/update/card', JSON.stringify(window.scoringCardConfig), {headers})
            .then(() => {
                setShowSuccess(true)
                setOpen(false);
            })
            .catch(error => {
                setShowError(true);
                setErrorMessage(error.message)
            })
    }
    const handleClose = () => setOpen(false);
    const rows = createRowsData();

    return (
        <Wrapper>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update scoring card
                    </Typography>
                    <TableContainer component={Paper} sx={{marginTop: '8px'}}>
                        <Table sx={{minWidth: 650, backgroundColor: 'rgb(34,43,54)'}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Scoring name</TableCell>
                                    <TableCell>Ranges</TableCell>
                                    <TableCell>Points</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.scoringName}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row" align={"left"}>
                                            {row.scoringName}
                                        </TableCell>
                                        <TableCell>
                                            {renderRanges(row.scoringName)}
                                        </TableCell>
                                        <TableCell>
                                            <ScoringList scoringPoints={row.scoringPoints}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div style={{marginTop: '12px', display: 'flex', justifyContent: 'center'}}>
                        <Button
                            variant="outlined"
                            endIcon={<CheckIcon/>}
                            color={"success"}
                            onClick={handleAccept}
                        >
                            Update scoring card
                        </Button>
                        <Button
                            variant="outlined"
                            endIcon={<CloseIcon/>}
                            color={"error"}
                            sx={{marginLeft: '8px'}}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </Box>
            </Modal>
            {showSuccess && <SuccessToast message={"Scoring card was updated succesfully"}/>}
            {showError && <ErrorToast message={errorMessage}/>}
        </Wrapper>
    )
}
