import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainContainer from 'components/molecules/MainContainer/MainContainer';
import Navbar from 'components/molecules/Navbar/Navbar';
import UsersProvider from 'providers/UsersProviders';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey} ;
  display: flex;
  flex-direction: row;
  width: 100% ;
  height: 100vh;
`;

const Root = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersProvider>
          <Wrapper>
            <Navbar />
            <MainContainer />
          </Wrapper>
        </UsersProvider>
      </ThemeProvider >
    </Router>
  )
}

export default Root

