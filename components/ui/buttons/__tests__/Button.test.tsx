import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("renders button with children", () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole("button", { name: /click me/i });
  expect(button).toBeInTheDocument();
});
