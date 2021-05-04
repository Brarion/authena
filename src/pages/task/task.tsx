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
import { Resource, TaskType } from '../../models/types'
import { ReactComponent as Automatic } from '../../assets/automatic.svg'
import { ReactComponent as Manual } from '../../assets/manual.svg'
import { ReactComponent as Test } from '../../assets/test.svg'
import { LoadTask } from '../../components/loadTask'

export const Task = () => {
  const params: { courseID: string; taskID: string } = useParams()

  useGate(taskModel.taskGate, params.taskID)

  const { task, taskPending } = useStore(taskModel.$store)

  useTitle(task?.name ?? 'Authena', [task])

  const getIcon = (type: TaskType): JSX.Element => {
    switch (type) {
      case TaskType.AUTOMATIC_CHECK:
        return <Automatic />
      case TaskType.MANUAL_CHECK:
        return <Manual />
      case TaskType.TEST:
        return <Test />
      default:
        return <Test />
    }
  }

  const getType = (type: TaskType): string => {
    switch (type) {
      case TaskType.AUTOMATIC_CHECK:
        return 'по программированию с автоматизированной проверкой'
      case TaskType.MANUAL_CHECK:
        return 'с ручной проверкой'
      case TaskType.TEST:
        return 'с вариантами ответа'
      default:
        return 'с вариантами ответа'
    }
  }

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Header />
        <main className={styles.main}>
          <Menu />
          <MainWrapper className={styles.mainWrapper}>
            {taskPending || task === null ? (
              <div>Загрузка...</div>
            ) : (
              <>
                <Path />
                <div className={styles.content}>
                  <h2>{`Задание - ${task.name}`}</h2>
                  <h3>{`Оценка: ${task.status}${
                    task.statusDate ? `, ${task.statusDate?.toLocaleDateString()}` : ''
                  }`}</h3>
                  <div className={styles.taskInfo}>
                    <div>
                      <span>{`Курирующий преподаватель:\u00A0`}</span>
                      <span>{`${task.teacher.surname} ${task.teacher.name[0]}. ${
                        task.teacher.patronymic !== undefined ? `${task.teacher.patronymic[0]}.` : ''
                      }`}</span>
                    </div>
                    <div>
                      <span>Тип задания:</span>
                      <span className={styles.icon}>{getIcon(task.type)}</span>
                      <span>{getType(task.type)}</span>
                    </div>
                    <div>
                      <span>{`Срок сдачи:\u00A0`}</span>
                      <span>{`на оценку ОТЛИЧНО - до ${
                        task.deadline?.five.toLocaleDateString() ?? 'нет срока'
                      }; на оценку ХОРОШО - до ${task.deadline?.four.toLocaleDateString() ?? 'нет срока'}`}</span>
                    </div>
                    <div>
                      <span>{`Наудачных попыток:\u00A0`}</span>
                      <span>{`${task.countOfTry[0]}/${task.countOfTry[1]}`}</span>
                    </div>
                  </div>
                  <LoadTask taskType={task.type} />
                </div>
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
