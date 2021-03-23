import React from "react";

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("render App component ", () => {
    render(<App />);
    screen.debug(); // full dom
    screen.getByText("testSearchValue"); // is searching "testSearchValue" in app component
  });
});
