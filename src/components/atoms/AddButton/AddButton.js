import styled from "styled-components";

export const AddButton = styled.button`
  padding: ${({ isBig }) => (isBig ? "10px 50px" : "4px 20px")};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 15px 0;
  :hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    cursor: pointer;
  }
`;
