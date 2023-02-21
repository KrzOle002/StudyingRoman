import React from "react";
import { StyledButton } from "./DeleteButton.style.js";
import { ReactComponent as DeleteIcon } from "assets/icon/delete-icon.svg";

const DeleteButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default DeleteButton;
