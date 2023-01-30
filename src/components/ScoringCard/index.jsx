import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {ScoringCardModal} from "./ScoringCardModal";
import {useState} from "react";

const Wrapper = styled.div`
    display: flex;
    margin-top: auto;
    justify-content: center;
    flex-direction: column;
 `;

export const ScoringCard = () => {
    const [openModal, setOpenModal] = useState(false);


    const buttonHandler = () => {
        setOpenModal(true);
    }

    return (
        <Wrapper>
            <Button variant="outlined" endIcon={<MenuBookIcon />} color={'warning'} onClick={buttonHandler}>
                Update Scoring Card
            </Button>
            <ScoringCardModal open={openModal} setOpen={setOpenModal}/>
        </Wrapper>
    )
}
