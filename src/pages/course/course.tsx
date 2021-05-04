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
import { ReactComponent as TaskGreat } from '../../assets/taskGreat.svg'

import { courseModel } from '../../models'

import styles from './styles.module.scss'

import { Status, TaskType } from '../../models/types'
import { routesPaths } from '../../routes/config'
import { useTitle } from '../../utils'

export const Course = () => {
  const params: { id: string } = useParams()

  useGate(courseModel.courseGate, params.id)

  const { currentCourse, pending } = useStore(courseModel.$store)

  useTitle(currentCourse?.name ?? 'Authena', [currentCourse])

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

  return (
    <div>
      <div style={{ height: '100vh' }}>
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
                      {currentCourse.authors.length > 0 ? (
                        currentCourse.authors.map((author, index) => (
                          <span key={index}>{`${author.surname} ${author.name[0]}. ${
                            author.patronymic !== undefined ? `${author.patronymic[0]}.` : ''
                          }${currentCourse!.authors.length !== index + 1 ? `,\u00A0` : ''}`}</span>
                        ))
                      ) : (
                        <div>нет</div>
                      )}
                    </div>
                    <div>
                      <span>Преподаватели:</span>
                      {currentCourse.teachers.length > 0 ? (
                        currentCourse.teachers.map((teacher, index) => (
                          <span key={index}>{`${teacher.surname} ${teacher.name[0]}. ${
                            teacher.patronymic !== undefined ? `${teacher.patronymic[0]}.` : ''
                          }${currentCourse!.teachers.length !== index + 1 ? `,\u00A0` : ''}`}</span>
                        ))
                      ) : (
                        <div>нет</div>
                      )}
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
                        currentCourse.tasks.map((task, index) => (
                          <a
                            key={index}
                            href={`${routesPaths.courses.path}/${currentCourse.id}/${task.id}`}
                            className={`${styles.task} ${
                              task.status === Status.FIVE || task.status === Status.FOUR
                                ? styles.great
                                : task.status === Status.DONE
                                ? styles.done
                                : styles.waiting
                            }`}
                          >
                            {task.status === Status.FIVE ||
                              (task.status === Status.FOUR && (
                                <div className={styles.flagGreat}>
                                  <TaskGreat />
                                </div>
                              ))}
                            <div className={styles.icon}>{getIcon(task.type)}</div>

                            <div className={styles.title}>
                              <h2>{`${index + 1}.`}</h2>
                              <h2>{task.name}</h2>
                            </div>

                            <div className={styles.period}>
                              <h2>Период выполнения:</h2>
                              <div>{`${task.period[0].toLocaleDateString()} - ${task.period[1].toLocaleDateString()}`}</div>
                            </div>

                            <div className={styles.countOfTry}>
                              <span>Количество попыток:</span>
                              <span>{`${task.countOfTry[0]}/${task.countOfTry[1]}`}</span>
                            </div>

                            <div className={styles.status}>
                              <h2>Текущий статус:</h2>
                              <div>{task.status}</div>
                            </div>
                          </a>
                        ))
                      ) : (
                        <div>пусто</div>
                      )}
                    </div>
                  </div>
                  <div className={styles.resourcesWrapper}>
                    <h2>Ресурсы курса</h2>
                    {currentCourse.resources.length > 0 ? (
                      <div className={styles.resources}>
                        {currentCourse.resources.map((resource, index) => (
                          <React.Fragment key={index}>
                            <div className={styles.divider} />
                            <div className={styles.resource}>{resource}</div>
                            {currentCourse!.resources.length === index + 1 && <div className={styles.divider} />}
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <div className={styles.resource}>Пусто 😥</div>
                    )}
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
