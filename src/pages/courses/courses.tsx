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
import { useGate, useStore } from 'effector-react'
import { coursesModel } from '../../models/courses'
import { Semester } from '../../enums/semester'

export const Courses = () => {
  // TODO set valid title
  useTitle(routes.find((route) => route.path === location.pathname)?.title ?? 'Authena')

  useGate(coursesModel.coursesGate)

  const { courses, loading } = useStore(coursesModel.$store)

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <main className={styles.main}>
        <Menu />
        <MainWrapper loading={loading} className={styles.mainWrapper}>
          {loading ? null : (
            <>
              <Path />
              <div className={styles.content}>
                {courses.length === 0 ? (
                  <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    Курсы закончились &#128521;
                  </h2>
                ) : (
                  courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      percents={course.percents}
                      academicStartYear={course.period.academicStartYear}
                      academicEndYear={course.period.academicEndYear}
                      semester={
                        course.period.semester === Semester.FIRST
                          ? '1'
                          : course.period.semester === Semester.SECOND
                          ? '2'
                          : ':('
                      }
                      teachers={course.teachers}
                      countOfWorks={course.tasksNumber}
                    />
                  ))
                )}
              </div>
            </>
          )}
        </MainWrapper>
        <LittleCalendar />
      </main>
    </div>
  )
}
