import React, { useEffect, useState, memo } from 'react'
import style from './components.module.css'

export enum ProgressBarClasses {
  active = 'active',
  inactive = 'inactive',
  error = 'error'
}

type BarProps = {
  percentage: number
}

const getClassNames = (status: ProgressBarClasses | null) => {
  const className = style.progressBar
  switch (status) {
    case ProgressBarClasses.active:
      return `${className} ${style.active}`
    case ProgressBarClasses.inactive:
      return `${className} ${style.inactive}`
    case ProgressBarClasses.error:
      return `${className} ${style.error}`
    default:
      return className
  }
}

const Bars: React.FC<BarProps> = ({ percentage }) => {
  const [status, setStatus] = useState<ProgressBarClasses | null>(null)
  useEffect(() => {
    if (percentage <= 0) setStatus(ProgressBarClasses.inactive)
    if (percentage > 100) setStatus(ProgressBarClasses.error)
    if (percentage > 0 && percentage <= 100)
      setStatus(ProgressBarClasses.active)
  }, [percentage])

  return (
    <div className={style.progressBarContainer}>
      <div className={style.percentagelabel}>{JSON.stringify(percentage)}%</div>
      <div
        style={
          {
            '--progress-bar-width': JSON.stringify(percentage) + '%'
          } as React.CSSProperties
        }
        data-testid='progress-bars'
        className={getClassNames(status)}
      ></div>
    </div>
  )
}

const memoedBars = memo(Bars)

export default memoedBars
