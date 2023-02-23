import React from 'react'
import style from './components.module.css'

const Controllers: React.FC<{ children: React.ReactNode[] }> = ({
  children
}) => {
  return <div className={style.flex}>{children}</div>
}

export default Controllers
