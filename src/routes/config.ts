import { lazy } from 'react'
import { AppRoute } from './types'

const Courses = lazy(() => import('../pages/courses/index').then((page) => ({ default: page.Courses })))
const Course = lazy(() => import('../pages/course/index').then((page) => ({ default: page.Course })))
const Task = lazy(() => import('../pages/task/index').then((page) => ({ default: page.Task })))
const CompletedCourses = lazy(() =>
  import('../pages/completedCourses/index').then((page) => ({ default: page.CompletedCourses }))
)
const Calendar = lazy(() => import('../pages/calendar/index').then((page) => ({ default: page.Calendar })))
const Statistics = lazy(() => import('../pages/statistics/index').then((page) => ({ default: page.Statistics })))
const Help = lazy(() => import('../pages/help/index').then((page) => ({ default: page.Help })))
const Error404 = lazy(() => import('../pages/error/index').then((page) => ({ default: page.Error404 })))

export const routes: AppRoute[] = [
  {
    title: 'Текущие курсы',
    path: '/courses',
    exact: true,
    component: Courses,
  },
  {
    title: 'Задание',
    path: '/courses/:id',
    exact: true,
    component: Course,
  },
  {
    title: 'Курс',
    path: '/courses/:courseID/:taskID',
    exact: true,
    component: Task,
  },
  {
    title: 'Успешно завершенные курсы',
    path: '/completedCourses',
    exact: true,
    component: CompletedCourses,
  },
  {
    title: 'Календарь',
    path: '/calendar',
    exact: true,
    component: Calendar,
  },
  {
    title: 'Статистика',
    path: '/statistics',
    exact: true,
    component: Statistics,
  },
  {
    title: 'Справка',
    path: '/help',
    exact: true,
    component: Help,
  },
  {
    title: 'Ошибка 404',
    path: '/404',
    exact: true,
    component: Error404,
  },
]

export const routesPaths = {
  courses: {
    title: 'Текущие курсы',
    path: '/courses',
  },
  completedCourses: {
    title: 'Успешно завершенные курсы',
    path: '/completedCourses',
  },
  calendar: {
    title: 'Календарь',
    path: '/calendar',
  },
  statistics: {
    title: 'Статистика',
    path: '/statistics',
  },
  help: {
    title: 'Справка',
    path: '/help',
  },
}

export const menuRoutesPaths: Array<{ title: string; path: string }> = [
  {
    title: 'Календарь',
    path: '/calendar',
  },
  {
    title: 'Курсы',
    path: '/courses',
  },
  {
    title: 'Статистика',
    path: '/statistics',
  },
  {
    title: 'Справка',
    path: '/help',
  },
]
