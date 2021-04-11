import React from 'react'
import { useParams } from 'react-router-dom'

import { useGate, useStore } from 'effector-react'

import { Path } from '../../components/path'
import { Header } from '../../components/header'
import { Menu } from '../../components/menu'
import { MainWrapper } from '../../components/mainWrapper'
import { LittleCalendar } from '../../components/littleCalendar'

import { ReactComponent as Test } from '../../assets/test.svg'
import { ReactComponent as Manual } from '../../assets/manual.svg'
import { ReactComponent as Automatic } from '../../assets/automatic.svg'

import { courseModel } from '../../models'

import styles from './styles.module.scss'
import { TaskType } from '../../mock/courseMock'

export const Course = () => {
  const params: { id: string } = useParams()

  useGate(courseModel.courseGate, params.id)

  const { currentCourse, pending } = useStore(courseModel.$store)

  const getIcon = (type: TaskType): JSX.Element => {
    switch (type) {
      case TaskType.AUTOMATIC_CHECK:
        return <Automatic />
      case TaskType.MANUAL_CHECK:
        return <Manual />
      case TaskType.TEST:
        return <Test />
    }
  }

  return (
    <div>
      <div style={{ height: '100%' }}>
        <Header />
        <main className={styles.main}>
          <Menu />
          <MainWrapper className={styles.mainWrapper}>
            {pending || currentCourse === null ? (
              <div className={styles.loader}>Загрузка...</div>
            ) : (
              <>
                <Path />
                <div className={styles.content}>
                  <div className={styles.people}>
                    <div>
                      <span>Авторы курса:</span>
                      {currentCourse.authors.length > 0 ? <div>hello</div> : <div>нет</div>}
                    </div>
                    <div>
                      <span>Преподаватели:</span>
                      {currentCourse.teachers.length > 0 ? <div>hello</div> : <div>нет</div>}
                    </div>
                  </div>
                  <div className={styles.tasksWrapper}>
                    <div className={styles.header}>
                      <h2>Задания</h2>
                      <div className={styles.taskTypesWrapper}>
                        <div>
                          <Test />
                          <div>с вариантами ответа</div>
                        </div>
                        <div>
                          <Manual />
                          <div>с ручной проверкой</div>
                        </div>
                        <div>
                          <Automatic />
                          <div>по программированию с автоматизированной проверкой</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.tasks}>
                      {currentCourse.tasks.length > 0 ? (
                        currentCourse.tasks.map((task) => (
                          <div className={styles.task}>
                            <div>{getIcon(task.type)}</div>
                          </div>
                        ))
                      ) : (
                        <div>пусто</div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </MainWrapper>
          <LittleCalendar />
        </main>
      </div>
    </div>
  )
}
