import { render, screen } from "@testing-library/react";
import App from "./App";

it("App page renders correctly", () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});

describe("elements work correctly", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("links are clickable", () => {
    const searchLink = screen.getByTestId("search");
    const homeLink = screen.getByTestId("home");
    const logoLink = screen.getByTestId("img");
    const hereLink = screen.getByTestId("here");
    expect(searchLink).toBeEnabled();
    expect(homeLink).toBeEnabled();
    expect(logoLink).toBeEnabled();
    expect(hereLink).toBeEnabled();
  });
});
