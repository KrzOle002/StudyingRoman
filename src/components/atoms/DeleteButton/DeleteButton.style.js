import styled from "styled-components";

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #c8c7d6;
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #b8b7c6;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
