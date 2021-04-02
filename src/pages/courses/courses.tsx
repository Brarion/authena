import React from 'react'

import { useTitle } from '../../utils'

import { Header } from '../../components/header'
import { Menu } from '../../components/menu'
import { CourseCard } from '../../components/courseCard'
import { MainWrapper } from '../../components/mainWrapper'
import { LittleCalendar } from '../../components/littleCalendar'

import styles from './styles.module.scss'

// TODO remove
import { coursesMock } from '../../mock/mock'

export const Courses = () => {
  // TODO set valid title
  useTitle('Курсы')

  return (
    <div style={{height: '100%'}}>
      <Header />
      <main className={styles.main}>
        <Menu />
        <MainWrapper className={styles.mainWrapper}>
          {coursesMock.length === 0 ? (
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              Курсы закончились &#128521;
            </h2>
          ) : (
            coursesMock.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                percents={course.percents}
                years={course.years}
                semester={course.semester}
                teachers={course.teachers}
                countOfWorks={course.countOfWorks}
              />
            ))
          )}
        </MainWrapper>
        <LittleCalendar />
      </main>
    </div>
  )
}
