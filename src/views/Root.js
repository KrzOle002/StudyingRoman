/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyle } from "assets/styles/GlobalStyle.js";
import { theme } from "assets/styles/theme.js";
import MainContainer from "components/molecules/MainContainer/MainContainer.js";
import UsersProvider from "providers/UsersProviders.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainTemplate from "components/templates/MainTemplate/MainTemplate.js";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <MainContainer />
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
