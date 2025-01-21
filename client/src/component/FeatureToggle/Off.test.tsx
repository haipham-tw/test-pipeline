import { render, screen } from "@testing-library/react";
import { Off } from "./Off";

describe("FeatureToggleOff", () => {
  it("should render the content when the toggle is off", () => {
    render(
      <Off isToggleActive={false}>
        <div>content</div>
      </Off>
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("should not render the content when the toggle is on", () => {
    render(
      <Off isToggleActive={true}>
        <div>content</div>
      </Off>
    );

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("should not render the content when the toggle isActive is invalid", () => {
    render(
      <Off isToggleActive={undefined}>
        <div>content</div>
      </Off>
    );

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });
});
