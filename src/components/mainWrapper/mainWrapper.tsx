import React from 'react'

import styles from './styles.module.scss'

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export const MainWrapper = ({ children, className }: MainWrapperProps) => {
  return <div className={`${styles.mainWrapper} ${className}`} children={children} />
}
