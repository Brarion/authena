import React from 'react'

import { ReactComponent as Loader } from '../../assets/loader/loader.svg'

import styles from './styles.module.scss'

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[] | null
  loading?: boolean
  className?: string
}

export const MainWrapper = ({ children, loading, className }: MainWrapperProps) => {
  return (
    <div className={`${styles.mainWrapper} ${className}`}>
      {loading ? <Loader className={styles.loader} /> : children}
    </div>
  )
}
