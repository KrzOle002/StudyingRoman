import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithThemeProvider.js";
import UserList from "../UserList/UserList.js";
import Form from "./Form.js";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithProviders(
      <>
        <Form />
        <UserList />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: { value: "Grażyna" },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: { value: "55%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "4.5" },
    });
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Grażyna");
  });
});
