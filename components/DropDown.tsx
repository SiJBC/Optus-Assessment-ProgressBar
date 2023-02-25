import React from 'react'
import styles from './components.module.css'

type DropDownProps = {
  handler: (e: React.ChangeEvent<HTMLSelectElement>) => void
  progress: ProgressLabels
}

export type ProgressLabels = 'Progress1' | 'Progress2' | 'Progress3'
const options: Array<ProgressLabels> = ['Progress1', 'Progress2', 'Progress3']

const DropDown: React.FC<DropDownProps> = ({ handler, progress }) => {
  return (
    <div
    data-testid ="dropdown"
    >
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handler(e as unknown as React.ChangeEvent<HTMLSelectElement>)
        }
        className={styles.hiddenMobile}
        value={progress}
        name='progress'
      >
        {options.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
      <div
        className={styles.hiddenDesktop}
        onChange={(e: React.ChangeEvent<HTMLDivElement>) => handler(e as any)}
        style={{ paddingRight: '30px' }}
      >
        {options.map((el, i) => (
          <React.Fragment key={i}>
            <input type='radio' value={el} name={el} />
            {el}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DropDown
