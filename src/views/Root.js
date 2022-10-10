import UserList from 'components/organisms/UserList/UserList'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.colors.lighGrey} ;
  display: flex;
  justify-content: center ;
  align-items: center ;
  width: 100% ;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wraper>
        <UserList />
      </Wraper>
    </ThemeProvider >
  )
}

export default Root

