import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button Component', () => {
  it('should render a button', () => {
    render(<Button value={10} handler={() => {}}></Button>)
    const button = screen.getByText('10')
    expect(button).toBeInTheDocument()
  })
  it('should call the click handler function if the user clicks the button', () => {
    const clickHandler = jest.fn()
    render(<Button value={10} handler={clickHandler} />)
    const button = screen.getByText('10')
    fireEvent.click(button)
    expect(clickHandler).toBeCalled()
  })
})
