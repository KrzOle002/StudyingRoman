import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithThemeProvider";
import UserList from "../UserList/UserList";
import Form from "./Form";

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
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Grażyna");
  });
});
