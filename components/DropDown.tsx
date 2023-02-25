import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

type DropDownProps = {
  handler: (e: SelectChangeEvent) => void
  progress: ProgressLabels
}

export type ProgressLabels = 'Progress1' | 'Progress2' | 'Progress3'
const options: Array<ProgressLabels> = ['Progress1', 'Progress2', 'Progress3']

const DropDown: React.FC<DropDownProps> = ({ handler, progress }) => {
  const [value, setValue] = useState<string | undefined>('Progress1')

  const inputHandler = (e: SelectChangeEvent) => {
    setValue(e.target.value)
    handler(e)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>
        Select Progress Bar{' '}
      </InputLabel>
      <Select
        datatest-id='dropdown'
        value={value}
        label='Progress Bar'
        onChange={inputHandler}
      >
        {options.map((el, i) => (
          <MenuItem key={i} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default DropDown
