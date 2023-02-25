import React from 'react'
import Button from '@mui/material/Button'

type ButtonProps = {
  value: number
  handler: (e: React.ChangeEvent<HTMLButtonElement>) => void
}

const StyledButton: React.FC<ButtonProps> = ({ value, handler }) => {
  return (
    <Button
      data-testid='button'
      value={value}
      onClick={e =>
        handler(e as unknown as React.ChangeEvent<HTMLButtonElement>)
      }
    >
      {value > 0 && <span>+</span>}
      {value}
    </Button>
  )
}

export default StyledButton
