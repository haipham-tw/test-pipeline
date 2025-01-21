import { render, screen, waitFor } from "@testing-library/react";
import { FeatureToggle, On, Off } from "../../component/FeatureToggle/FeatureToggle";
import * as featureManager from "../../utils/feature-manager/FeatureManager";

describe("FeatureToggle", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    spy = jest.spyOn(featureManager, "isActive");
  });

  it("should render only the ON content when the toggle is on", async () => {
    spy.mockResolvedValue(true);

    render(
      <FeatureToggle name="TOGGLE">
        <On>
          <div>content when ON</div>
        </On>
        <Off>
          <div>content when OFF</div>
        </Off>
      </FeatureToggle>
    );

    expect(await screen.findByText("content when ON")).toBeInTheDocument();
    expect(screen.queryByText("content when OFF")).not.toBeInTheDocument();
  });

  it("should render only the OFF content when the toggle is off", async () => {
    spy.mockResolvedValue(false);

    render(
      <FeatureToggle name="TOGGLE">
        <On>
          <div>content when ON</div>
        </On>
        <Off>
          <div>content when OFF</div>
        </Off>
      </FeatureToggle>
    );

    expect(screen.queryByText("content when ON")).not.toBeInTheDocument();
    expect(await screen.findByText("content when OFF")).toBeInTheDocument();
  });

  it("should not render any content while fetching the toggles", async () => {
    spy.mockResolvedValue(undefined);

    render(
      <FeatureToggle name="TOGGLE">
        <On>
          <div>content when ON</div>
        </On>
        <Off>
          <div>content when OFF</div>
        </Off>
      </FeatureToggle>
    );

    await waitFor(() => {
      expect(screen.queryByText("content when ON")).not.toBeInTheDocument();
    });
    expect(screen.queryByText("content when OFF")).not.toBeInTheDocument();
  });

  it("should not render anything outside the on and off component", async () => {
    spy.mockResolvedValue(true);

    render(
      <FeatureToggle name="TOGGLE">
        <div>content outside</div>
        <On>
          <div>content when ON</div>
        </On>
        <Off>
          <div>content when OFF</div>
        </Off>
      </FeatureToggle>
    );

    await waitFor(() => {
      expect(screen.queryByText("content outside")).not.toBeInTheDocument();
    });
  });
});
