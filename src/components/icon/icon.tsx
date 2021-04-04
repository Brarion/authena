import React from 'react'

import { ReactComponent as Eye } from '../../assets/authena.svg'

import { routesPaths } from '../../routes/config'

import styles from './styles.module.scss'

export const Icon = () => {
  return (
    <a href={routesPaths.courses.path} className={styles.wrapper}>
      <Eye className={styles.eye} />
      <h1 className={styles.title}>AUTHENA</h1>
    </a>
  )
}
