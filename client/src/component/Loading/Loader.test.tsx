import Loader from "./Loader";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {

  it("should render a progressbar on load", () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar', { hidden: true })).toBeInTheDocument()
  });
});
