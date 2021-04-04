import React from 'react'

import { useStore } from 'effector-react'

import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg'

import { breadCrumbsModel } from '../../models'

import styles from './styles.module.scss'

export const Path = () => {
  const { path } = useStore(breadCrumbsModel.$store)

  console.log(path)

  return (
    <div className={styles.path}>
      {path.length > 0 &&
        path.map((p, index) => (
          <React.Fragment key={p.title}>
            <a
              href={p.path}
              onClick={(e) => {
                if (index + 1 === path.length) e.preventDefault()
              }}
            >
              {p.title}
            </a>
            {index + 1 < path.length && <RightArrow />}
          </React.Fragment>
        ))}
    </div>
  )
}
