import { renderWithProviders } from "helpers/renderWithThemeProvider";
import FormField from "./FormField";

describe("Form Field", () => {
  it("Renders the component", () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
