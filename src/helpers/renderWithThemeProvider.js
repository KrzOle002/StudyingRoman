import { render } from "@testing-library/react";
import { theme } from "assets/styles/theme";
import UsersProvider from "providers/UsersProviders";
import { ThemeProvider } from "styled-components";

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
};
