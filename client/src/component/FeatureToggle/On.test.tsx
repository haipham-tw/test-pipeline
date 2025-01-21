import { render, screen } from "@testing-library/react";
import { On } from "./On";

describe("FeatureToggleOn", () => {
  it("should render the content when the toggle is on", () => {
    render(
      <On isToggleActive={true}>
        <div>content</div>
      </On>
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("should not render the content when the toggle is off", () => {
    render(
      <On isToggleActive={false}>
        <div>content</div>
      </On>
    );

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("should not render the content when the toggle isActive is invalid", () => {
    render(
      <On isToggleActive={undefined}>
        <div>content</div>
      </On>
    );

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });
});
