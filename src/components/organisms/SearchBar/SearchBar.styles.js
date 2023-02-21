import styled from "styled-components";
import { Input } from "components/atoms/Input/Input.js";
export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 500px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 0 40px;
  p {
    margin: 5px;
  }
`;
