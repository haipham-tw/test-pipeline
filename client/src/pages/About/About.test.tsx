import About from "./About";
import React from "react";
import { render, screen } from "@testing-library/react";
import * as api from "../../utils/api/Api";
import { HttpStatus } from "../../utils/api/Api";
import { API_CONFIG } from "../../api-config";
import * as featureManager from '../../utils/feature-manager/FeatureManager'

describe("About", () => {

  let spyApi: jest.SpyInstance;
  let spyFeatureManager: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    spyApi = jest.spyOn(api, "get");
    spyApi.mockResolvedValue({ message: "Some information" });
    spyFeatureManager = jest.spyOn(featureManager, "isActive");
    spyFeatureManager.mockResolvedValue(false);
  });

  it("should render About info after successful load from server", async () => {
    render(<About />)

    expect(await screen.findByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Some information")).toBeInTheDocument();
    expect(spyApi).toHaveBeenCalledWith(API_CONFIG.about.url, [HttpStatus.OK]);
  });

  it("should render progress bar whilst waiting for  API call to resolve", async () => {
    render(<About />);

    expect(screen.queryByText("About Us")).not.toBeInTheDocument();
    expect(screen.getByRole('progressbar', { hidden: true })).toBeInTheDocument();

    expect(await screen.findByText("About Us")).toBeInTheDocument();
  });

  it("should render coming soon text instead of the image when ABOUT_IMAGE toggle is off", async () =>{
    render(<About />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(await screen.findByText('About us image coming soon...')).toBeInTheDocument();
  });

  it("should render about us image when ABOUT_IMAGE toggle is on", async () => {
    spyFeatureManager.mockResolvedValue(true);
    render(<About />);
    expect(screen.queryByText('About us image coming soon...')).not.toBeInTheDocument();
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });
});
