import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EveryoneGoals from "./EveryoneGoals";
import React from "react";

test("renders Everyone Goals Component", () => {
  render(<EveryoneGoals />);
  const element = screen.getByText("Everyone Goals Component");
  expect(element).toBeInTheDocument();
});