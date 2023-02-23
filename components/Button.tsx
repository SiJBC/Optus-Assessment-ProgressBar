import React from 'react'

type ButtonProps = {
  value: number
  handler: (e: React.ChangeEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ value, handler }) => {
  return (
    <button
      data-testid='button'
      value={value}
      onClick={e =>
        handler(e as unknown as React.ChangeEvent<HTMLButtonElement>)
      }
    >
      {value > 0 && <span>+</span>}
      {value}
    </button>
  )
}

export default Button
