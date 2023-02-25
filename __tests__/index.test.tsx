import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import * as Components from '../components'

describe('Home', () => {
  it('renders the correct heading Progress Bar', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /Progress Bar/i
    })
    expect(heading).toBeInTheDocument()
  })
})
