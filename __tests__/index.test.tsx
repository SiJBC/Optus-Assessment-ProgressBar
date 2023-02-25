import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import * as Components from '../components'
const {DropDown, Controllers, Container } = Components

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const dropDown = screen.queryByTestId('dropdown')
    const controllers = screen.queryByTestId('controllers')
    const container = screen.queryByTestId('container')
    const heading = screen.getByRole('heading', {
      name: /Progress Bar/i
    })
    expect(dropDown).toBeInTheDocument()
    expect(controllers).toBeInTheDocument()
    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
})
