import React from 'react'

import { useParams } from 'react-router-dom'
import { Header } from '../../components/header'
import styles from './styles.module.scss'
import { Menu } from '../../components/menu'
import { MainWrapper } from '../../components/mainWrapper'
import { Path } from '../../components/path'
import { useGate, useStore } from 'effector-react'
import { taskModel } from '../../models'
import { useTitle } from '../../utils'
import { Resource } from '../../models/types'

export const Task = () => {
  const params: { courseID: string; taskID: string } = useParams()

  useGate(taskModel.taskGate, params.taskID)

  const { task, pending } = useStore(taskModel.$store)

  useTitle(task?.name ?? 'Задание', [task])

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Header />
        <main className={styles.main}>
          <Menu />
          <MainWrapper className={styles.mainWrapper}>
            {pending || task === null ? (
              <div>Загрузка...</div>
            ) : (
              <>
                <Path />
              </>
            )}
          </MainWrapper>
          <Resources resources={task?.resources ?? []} />
        </main>
      </div>
    </div>
  )
}

interface ResourcesProps {
  resources: Resource[]
}

const Resources = ({ resources }: ResourcesProps) => {
  return (
    <div className={styles.resourcesWrapper}>
      <h2>Ресурсы задания</h2>
      {resources.length > 0 ? (
        resources.map((resource, index) => (
          <React.Fragment key={index}>
            <div className={styles.divider} />
            <div className={styles.resource}>{resource}</div>
            {resources.length === index + 1 && <div className={styles.divider} />}
          </React.Fragment>
        ))
      ) : (
        <div className={styles.resource}>Пусто 😥</div>
      )}
    </div>
  )
}
