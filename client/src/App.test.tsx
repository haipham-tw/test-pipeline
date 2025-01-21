import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {inspirationalQuoteMatcher} from './pages/Home/Home.test';
import * as featureManager from "./utils/feature-manager/FeatureManager";
import * as api from "./utils/api/Api";

const renderWithRouter = (ui: JSX.Element, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        user: userEvent.setup(),
        ...render(ui, {wrapper: BrowserRouter}),
    }
}

describe('App', () => {
    let featureManagerMock: jest.SpyInstance;
    let apiMock: jest.SpyInstance;

    const apiMessage = "Some information"

    beforeEach(() => {
        jest.clearAllMocks();
        featureManagerMock = jest.spyOn(featureManager, "isActive");
        featureManagerMock.mockResolvedValue(false);

        apiMock = jest.spyOn(api, "get");
        apiMock.mockResolvedValue({message: apiMessage});
    });

    it('should render the Home page by default', async () => {
        renderWithRouter(<App/>)

        await waitFor(() => {
            expect(screen.getByText(inspirationalQuoteMatcher())).toBeInTheDocument()
        })
    })

    it('should render the About page when the About link is clicked', async () => {
        renderWithRouter(<App/>)

        const linkToAbout = screen.getByRole('link', {name: "About"})

        await userEvent.click(linkToAbout)

        expect(screen.queryByText(inspirationalQuoteMatcher())).not.toBeInTheDocument()
        expect(screen.getByText(apiMessage)).toBeInTheDocument()
    })

    it('should return to the Home page when the TheBookStore link is clicked', async () => {
        renderWithRouter(<App/>)

        const linkToAbout = screen.getByRole('link', {name: "About"})
        await userEvent.click(linkToAbout)

        const linkToHome = screen.getByRole('link', {name: "Home"})
        await userEvent.click(linkToHome)

        expect(screen.queryByRole("progressbar", {hidden: true})).not.toBeInTheDocument()
        expect(screen.getByText(inspirationalQuoteMatcher())).toBeInTheDocument()
    })

    it('should render the About page when accessing the About page URL', async () => {
        renderWithRouter(<App/>, {route: '/about'})

        await waitFor(() => {
            expect(screen.queryByText(inspirationalQuoteMatcher())).not.toBeInTheDocument()
        })
        await waitFor(() => {
            expect(screen.getByText(apiMessage)).toBeInTheDocument()
        })

    })
})
