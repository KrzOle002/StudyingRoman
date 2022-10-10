import React from "react";
import { StyledButton } from "./Button.style";
import { ReactComponent as DeleteIcon } from 'assets/icon/delete-icon.svg';

const Button = (props) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
};

export default Button;