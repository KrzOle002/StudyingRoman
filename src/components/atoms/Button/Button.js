import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from 'assets/icon/delete-icon.svg';

const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: #c8c7d6;
    border-radius: 50px; 
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg{
        width: 100%;
        height: 100%;
    }
`;

const Button = (props) => {
    return (
        <StyledButton {...props}>
            <DeleteIcon />
        </StyledButton>
    )
};

export default Button;