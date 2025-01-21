import { MatcherFunction, render, screen } from '@testing-library/react'
import Home from './Home'
import React from "react"
import * as featureManager from '../../utils/feature-manager/FeatureManager'

export const inspirationalQuoteMatcher = (): MatcherFunction => (content: string) => content.includes("A reader lives a thousand lives")

describe('Home', () => {

  let spy: jest.SpyInstance

  beforeEach(() => {
    jest.clearAllMocks();
    spy = jest.spyOn(featureManager, 'isActive')
    spy.mockResolvedValue(false)
  })

  it('should render an inspirational quote', async () => {
    render(<Home />)

    expect(await screen.findByText(inspirationalQuoteMatcher())).toBeInTheDocument()
  })

})
