import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2/2;
  grid-column: 2/3;
`;
