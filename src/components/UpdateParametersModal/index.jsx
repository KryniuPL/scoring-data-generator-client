import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import {useState} from "react";
import {AccountsRangeModal} from "./components/AccountsRangeModal";
import {PaymentsRangeModal} from "./components/PaymentsRangeModal";
import {AgeRangeModal} from "./components/AgeRangeModal";
import {ChildrenRangeModal} from "./components/ChildrenRangeModal";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {SuccessToast} from "../Toasts/SuccessToast";
import {ErrorToast} from "../Toasts/ErrorToast";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    color: 'white',
    bgcolor: 'rgb(23,28,36)',
    border: '2px solid #29b6f6',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
};

const createData = (key, label, min, max) => {
    return {key, label, min, max};
}

const createRowsData = (generationData) => {
    if (generationData !== null) {
        return [
            createData('Accounts', 'Accounts range', generationData.accountsRange.min, generationData.accountsRange.max),
            createData('Payments', 'Payments range', generationData.paymentsRange.min, generationData.paymentsRange.max),
            createData('Age', 'Age range', generationData.clientsAgeRange.min, generationData.clientsAgeRange.max),
            createData('Children', 'Children range', generationData.childrenRange.min, generationData.childrenRange.max),
        ];
    } else return [];
}

const headers = {
    'Content-Type': 'application/json',
}

export const UpdateParametersModal = ({open, setOpen}) => {
    const [openAccountsRangeModal, setOpenAccountsRangeModal] = useState(false);
    const [openPaymentsRangeModal, setOpenPaymentsRangeModal] = useState(false);
    const [openAgeRangeModal, setOpenAgeRangeModal] = useState(false);
    const [openChildrenRangeModal, setOpenChildrenRangeModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const rows = createRowsData(window.generationData);

    const handleClose = () => setOpen(false);

    const approveHandler = () => {
        return axios.post('/api/update', JSON.stringify(window.generationData), {headers})
            .then(() => {
                setOpen(false)
                setShowSuccess(true)
            })
            .catch(error => {
                setShowError(true);
                setErrorMessage(error.message)
            })
    }

    const openUpdateModal = (key) => {
        switch (key) {
            case "Accounts":
                setOpenAccountsRangeModal(true)
                break;
            case "Payments":
                setOpenPaymentsRangeModal(true)
                break;
            case "Age":
                setOpenAgeRangeModal(true)
                break;
            case "Children":
                setOpenChildrenRangeModal(true)
                break;
            default:
                return;
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Change generator parameters
                    </Typography>
                    <TableContainer component={Paper} sx={{marginTop: '8px'}}>
                        <Table sx={{minWidth: 650, backgroundColor: 'rgb(34,43,54)'}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Parameter name</TableCell>
                                    <TableCell align="right">Minimum</TableCell>
                                    <TableCell align="right">Maximum</TableCell>
                                    <TableCell align="right">Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.key}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.label}
                                        </TableCell>
                                        <TableCell align="right">{row.min}</TableCell>
                                        <TableCell align="right">{row.max}</TableCell>
                                        <TableCell align="right">
                                            <Fab color="primary" aria-label="edit"
                                                 onClick={() => openUpdateModal(row.key)}>
                                                <EditIcon/>
                                            </Fab>
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
                            onClick={approveHandler}
                        >
                            Update generator parameters
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

                    {window.generationData && window.generationData.accountsRange && <AccountsRangeModal
                        min={window.generationData.accountsRange.min || 0}
                        max={window.generationData.accountsRange.max || 0}
                        label={'accounts range'}
                        open={openAccountsRangeModal}
                        setOpen={setOpenAccountsRangeModal}
                    />}
                    {window.generationData && window.generationData.paymentsRange && <PaymentsRangeModal
                        min={window.generationData.paymentsRange.min || 0}
                        max={window.generationData.paymentsRange.max || 0}
                        label={'payments range'}
                        open={openPaymentsRangeModal}
                        setOpen={setOpenPaymentsRangeModal}
                    />}
                    {window.generationData && window.generationData.clientsAgeRange && <AgeRangeModal
                        min={window.generationData.clientsAgeRange.min || 0}
                        max={window.generationData.clientsAgeRange.max || 0}
                        label={'age range'}
                        open={openAgeRangeModal}
                        setOpen={setOpenAgeRangeModal}
                    />}
                    {window.generationData && window.generationData.childrenRange && <ChildrenRangeModal
                        min={window.generationData.childrenRange.min || 0}
                        max={window.generationData.childrenRange.max || 0}
                        label={'children range'}
                        open={openChildrenRangeModal}
                        setOpen={setOpenChildrenRangeModal}
                    />}
                </Box>
            </Modal>
            {showSuccess && <SuccessToast message={"Processing was updated succesfully"}/>}
            {showError && <ErrorToast message={errorMessage}/>}
        </div>
    );
}
