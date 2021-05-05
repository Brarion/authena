import React from 'react'

import { routesPaths } from '../../routes/config'

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg'
import { ReactComponent as TeacherIcon } from '../../assets/teacherIcon.svg'
import { ReactComponent as Pen } from '../../assets/pen.svg'

import styles from './styles.module.scss'
import { Teacher } from '../../types/teacher'

interface CourseCardProps {
  title: string
  id: string
  percents: number
  academicStartYear: number
  academicEndYear: number
  semester: string
  teachers: Teacher[]
  countOfWorks: number
}

export const CourseCard = ({
  title,
  id,
  percents,
  academicStartYear,
  academicEndYear,
  semester,
  teachers,
  countOfWorks,
}: CourseCardProps) => {
  return (
    <a
      href={`${routesPaths.courses.path}/${id}`}
      className={`${styles.card} ${percents >= 70 ? styles.greenCard : ''}`}
    >
      <div className={styles.percents}>{`${percents}%`}</div>
      <h2>{title}</h2>
      <div className={styles.period}>
        <div>{`${academicStartYear}-${academicEndYear}`}</div>
        <Ellipse />
        <div>{`${semester} семестр`}</div>
      </div>
      <div className={styles.teachers}>
        <TeacherIcon />
        {teachers.length > 0 && (
          <div>
            {teachers.slice(0, 2).map((teacher, index) => {
              const teacherSplit = teacher.fullName.split(' ')

              const surname = teacherSplit[0]
              const name = teacherSplit[1]
              const patronymic = teacherSplit.length === 2 ? undefined : teacherSplit[2]

              return (
                <div key={index} className={styles.teacher}>{`${surname} ${name}${
                  patronymic !== undefined ? ` ${patronymic}` : ''
                }`}</div>
              )
            })}
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
