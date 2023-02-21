import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import NewsSection, { query } from "./NewsSection.js";
import { renderWithProviders } from "helpers/renderWithThemeProvider.js";
import { screen, fireEvent } from "@testing-library/react";
const mock = new MockAdapter(axios);

describe("News Section", () => {
  afterEach(() => {
    mock.reset();
  });
  it("Should display error when the article are not loaded correctly", async () => {
    renderWithProviders(<NewsSection />);
    mock.onPost("https://graphql.datocms.com/", { query }).reply(500);
    await screen.findByText(/Loading/);
  });

  it("Should", async () => {
    mock.onPost("https://graphql.datocms.com/", { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: "Test", category: "Test", content: "Test" },
        ],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
