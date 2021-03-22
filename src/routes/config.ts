import React, { lazy } from 'react'
import { AppRoute } from './types'

const Courses: React.LazyExoticComponent<any> = lazy(() =>
  import('../pages/courses/index').then((page) => ({ default: page.Courses }))
)

export const routes: AppRoute[] = [
  {
    title: 'Курсы',
    path: '/',
    exact: true,
    component: Courses,
  },
]
