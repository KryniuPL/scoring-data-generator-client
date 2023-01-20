import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    color: 'white',
    bgcolor: 'rgb(23,28,36)',
    border: '2px solid #29b6f6',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
};

export const AgeRangeModal = ({min, max, label, open, setOpen}) => {
    const [range, setRange] = useState({min: 0, max: 0})
    const handleClose = () => {
        setOpen(false);
    };

    const approveHandler = () => {
        setOpen(false);
        window.generationData = {...window.generationData, clientsAgeRange: range}
    }

    const onMinChange = (event) => {
        const value = parseInt(event.target.value);
        setRange({...range, min: value})
    }

    const onMaxChange = (event) => {
        const value = parseInt(event.target.value);
        setRange({...range, max: value})
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit {label}
                </Typography>
                <div>
                    <TextField
                        onChange={onMinChange}
                        defaultValue={min}
                        label="Min"
                        size={"small"}
                        margin={"normal"}
                        sx={{width: '40%'}}
                        inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                    />
                    <TextField
                        onChange={onMaxChange}
                        label="Max"
                        defaultValue={max}
                        size={"small"}
                        margin={"normal"}
                        sx={{width: '40%', marginLeft: '16px'}}
                        inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                    />
                </div>
                <div style={{marginTop: '12px'}}>
                    <Button
                        variant="outlined"
                        endIcon={<CheckIcon />}
                        color={"success"}
                        onClick={approveHandler}
                    >
                        Save
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<CloseIcon />}
                        color={"error"}
                        sx={{marginLeft: '8px'}}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}
