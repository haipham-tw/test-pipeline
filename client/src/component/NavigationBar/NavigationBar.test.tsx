import NavigationBar from "./NavigationBar";
import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";


describe("Navigation bar", () => {
  it('should render exactly 2 links', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    )

    const links = screen.getAllByRole('link')
    expect(links.length).toEqual(2)
  })

  it('should render Home link', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    )

    expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument()
  })

  it('should render About link', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    )
    expect(screen.getByRole('link', { name: "About" })).toBeInTheDocument()
  })
});
