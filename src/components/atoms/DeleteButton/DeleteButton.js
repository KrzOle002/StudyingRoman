import React from "react";
import { StyledButton } from "./DeleteButton.style";
import { ReactComponent as DeleteIcon } from 'assets/icon/delete-icon.svg';

const DeleteButton = (props) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
};

export default DeleteButton;