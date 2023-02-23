import React from 'react'
import styles from './components.module.css'

export const Container: React.FC<{ children: React.ReactNode[] }> = ({
  children
}) => {
  return <div className={styles.grid}>{children}</div>
}
