import React from 'react'

import { useTitle } from '../../utils'

import { Path } from '../../components/path'
import { Header } from '../../components/header'
import { Menu } from '../../components/menu'
import { CourseCard } from '../../components/courseCard'
import { MainWrapper } from '../../components/mainWrapper'
import { LittleCalendar } from '../../components/littleCalendar'

import { routes } from '../../routes/config'

import styles from './styles.module.scss'

// TODO remove
import { coursesMock } from '../../mock/mock'

export const Courses = () => {
  // TODO set valid title
  useTitle(routes.find((route) => route.path === location.pathname)?.title ?? 'Authena')

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <main className={styles.main}>
        <Menu />
        <MainWrapper className={styles.mainWrapper}>
          <Path />
          <div className={styles.content}>
            {coursesMock.length === 0 ? (
              <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                Курсы закончились &#128521;
              </h2>
            ) : (
              coursesMock.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  percents={course.percents}
                  years={course.years}
                  semester={course.semester}
                  teachers={course.teachers}
                  countOfWorks={course.countOfWorks}
                />
              ))
            )}
          </div>
        </MainWrapper>
        <LittleCalendar />
      </main>
    </div>
  )
}
