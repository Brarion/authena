import React from 'react'
import { TaskType } from '../../models/types'
import { AutomaticTask } from './automaticTask'
import { ManualTask } from './manualTask'
import { TestTask } from './testTask'
import { Tabs } from './tabs'

import styles from './styles.module.scss'
import { TaskHistory } from './history'

interface LoadTaskProps {
  taskType: TaskType
}

export const LoadTask = ({ taskType }: LoadTaskProps) => {
  const [tab, setTab] = React.useState<number>(0)

  const getTask = (): JSX.Element => {
    switch (taskType) {
      case TaskType.AUTOMATIC_CHECK:
        return <AutomaticTask />
      case TaskType.MANUAL_CHECK:
        return <ManualTask />
      case TaskType.TEST:
        return <TestTask />
      default:
        return <TestTask />
    }
  }

  return (
    <div className={styles.loadTaskWrapper}>
      <Tabs setTab={setTab} tab={tab} />
      {tab === 0 && getTask()}
      {tab === 1 && <TaskHistory />}
    </div>
  )
}
