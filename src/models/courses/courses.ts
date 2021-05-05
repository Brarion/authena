import { combine, createDomain, sample } from 'effector'
import { Course } from '../../types/course'
import { createReEffect } from 'effector-reeffect'
import { courseApi } from '../../api/courses/course'
import { createGate } from 'effector-react'

const getCoursesFx = createReEffect({ handler: courseApi.getCourses })
const getCollaboratorsFx = createReEffect({ handler: courseApi.getAllCoursesCollaboratorsByCoursesIds })

const coursesGate = createGate()

const coursesDomain = createDomain('courses')

const $courses = coursesDomain
  .createStore<Course[]>([])
  .on(getCoursesFx.doneData, (_, courses) =>
    courses.map((course) => ({
      ...course,
      teachers: [],
      percents: 33,
    }))
  )
  .on(getCollaboratorsFx.doneData, (courses, collaborators) =>
    courses.map((course, index) => ({
      ...course,
      teachers: collaborators[index],
    }))
  )

sample({
  source: coursesGate.open,
  target: getCoursesFx,
  fn: () => localStorage.getItem('accessToken') ?? '',
})

sample({
  source: getCoursesFx.doneData,
  target: getCollaboratorsFx,
  fn: (courses) => ({
    coursesIds: courses.map((course) => course.id),
    token: localStorage.getItem('accessToken') ?? '',
  }),
})

getCoursesFx.doneData.watch((v) => console.log(v))
getCollaboratorsFx.doneData.watch((v) => console.log(v))

// TODO toast

export const coursesModel = {
  $store: combine<{ courses: Course[]; loading: boolean }>({
    courses: $courses,
    loading: getCoursesFx.pending || getCollaboratorsFx.pending,
  }),
  coursesGate,
}
