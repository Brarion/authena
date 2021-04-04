import React from 'react'

import { routesPaths } from '../../routes/config'

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'
import { ReactComponent as TeacherIcon } from '../../assets/teacherIcon.svg'
import { ReactComponent as Pen } from '../../assets/pen.svg'

import styles from './styles.module.scss'

interface CourseCardProps {
  title: string
  id: number
  percents: number
  years: { start: number; end: number }
  semester: number
  teachers: Array<{ name: string; surname: string; patronymic?: string }>
  countOfWorks: number
}

export const CourseCard = ({ title, id, percents, years, semester, teachers, countOfWorks }: CourseCardProps) => {
  return (
    <a
      href={`${routesPaths.courses.path}/${id}`}
      className={`${styles.card} ${percents >= 70 ? styles.greenCard : ''}`}
    >
      <div className={styles.percents}>{`${percents}%`}</div>
      <h2>{title}</h2>
      <div className={styles.period}>
        <div>{`${years.start}-${years.end}`}</div>
        <Ellipse />
        <div>{`${semester} семестр`}</div>
      </div>
      <div className={styles.teachers}>
        <TeacherIcon />
        {teachers.length > 0 && (
          <div>
            {teachers.slice(0, 2).map((teacher, index) => (
              <div key={index} className={styles.teacher}>{`${teacher.name} ${teacher.surname}${
                teacher.patronymic !== undefined ? ` ${teacher.patronymic}` : ''
              }`}</div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.works}>
        <Pen />
        <div>{`Работ на курсе: ${countOfWorks}`}</div>
      </div>
      <div className={styles.progressAll} />
      <div className={styles.progress} style={{ width: `calc(${percents}% - 30px)` }} />
    </a>
  )
}
