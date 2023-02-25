import React from 'react'
import styles from './components.module.css'

 const Container: React.FC<{ children: React.ReactNode[] }> = ({
  children
}) => {
  return <div data-testid="container" className={styles.grid}>{children}</div>
}

export default Container
