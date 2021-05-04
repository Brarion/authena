import React from 'react'

import styles from './styles.module.scss'
import { useTitle } from '../../utils'

export const Error404 = () => {
  useTitle('404')

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>404</div>
        <div>😥</div>
      </div>
    </div>
  )
}
