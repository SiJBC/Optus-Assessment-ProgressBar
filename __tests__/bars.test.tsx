import { render, screen } from '@testing-library/react'
import Bars from '../components/Bars'

const errorPercentageProp: number = 101
const percentagePropActive: number = 50
const percentagePropInActive: number = 0

describe('Bar component should render percentage number and change color depending on percentage', () => {
  it('should render a bar', () => {
    render(<Bars percentage={percentagePropActive} />)
    const percentageRenderCheck = screen.getByText(`${percentagePropActive}%`)
    expect(percentageRenderCheck).toBeInTheDocument()
  })
  it('background should have a class of active because prop value is greater than 0 and less than 100', () => {
    render(<Bars percentage={percentagePropActive} />)
    const progressBar = screen.queryByTestId('progress-bars')
    expect(progressBar).toHaveClass('active')
  })
  it('background should have a class of inactive because prop value is greater than 0 and less than 100', () => {
    render(<Bars percentage={percentagePropInActive} />)
    const progressBar = screen.queryByTestId('progress-bars')
    expect(progressBar).toHaveClass('inactive')
  })
  it('background should have a class of error because prop value is greater than 100', () => {
    render(<Bars percentage={errorPercentageProp} />)
    const progressBar = screen.queryByTestId('progress-bars')
    expect(progressBar).toHaveClass('error')
  })
  it('progress bar width should match the prop value % entered', () => {
    render(<Bars percentage={errorPercentageProp} />)
    const progressBar = screen.queryByTestId('progress-bars')
    expect(progressBar).toHaveStyle(
      `--progress-bar-width: ${errorPercentageProp}%`
    )
  })
})
