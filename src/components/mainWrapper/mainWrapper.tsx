import React from 'react'

import styles from './styles.module.scss'

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[] | null
  loading?: boolean
  className?: string
}

export const MainWrapper = ({ children, loading, className }: MainWrapperProps) => {
  return <div className={`${styles.mainWrapper} ${className} ${loading ? styles.loading : ''}`} children={children} />
}
