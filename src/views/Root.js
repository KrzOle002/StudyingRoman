import UserList from 'components/organisms/UserList/UserList'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey} ;
  display: flex;
  justify-content: center ;
  align-items: center ;
  width: 100% ;
  height: 100vh;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wraper>
          <Switch>
            <Route path="/">
              <UserList />
            </Route>

          </Switch>
        </Wraper>
      </ThemeProvider >
    </Router>
  )
}

export default Root

