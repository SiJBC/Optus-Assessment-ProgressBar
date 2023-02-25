import React from 'react'
import style from './components.module.css'

const Controllers: React.FC<{ children: React.ReactNode[] }> = ({
  children
}) => {
  return <div data-testid="controllers" className={style.flex}>{children}</div>
}

export default Controllers
