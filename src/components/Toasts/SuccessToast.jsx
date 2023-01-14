import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

export const SuccessToast = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Data generation started! Real time date will be provided on the right side
            </Alert>
        </Snackbar>
    )
}
