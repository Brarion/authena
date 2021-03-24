import React from 'react'

import { ReactComponent as Eye } from '../../assets/authena.svg'

import styles from './styles.module.scss'

export const Icon = () => {
  return (
    <div className={styles.wrapper}>
      <Eye className={styles.eye} />
      <h1 className={styles.title}>AUTHENA</h1>
    </div>
  )
}
