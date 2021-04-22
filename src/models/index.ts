import { sample, guard } from 'effector'

import { breadCrumbsModel } from './breadCrumbs'
import { courseModel } from './course'
import { calendarModel } from './calendar'
import { searchModel } from './search'
import { userModel } from './user'

import { routesPaths } from '../routes/config'

sample({
  source: guard({
    source: courseModel.$store,
    filter: ({ currentCourse }) => currentCourse !== null,
  }),
  clock: courseModel.$store.map((store) => store.currentCourse).updates,
  target: breadCrumbsModel.input.addPath,
  fn: ({ currentCourse }) => ({
      title: currentCourse!.name,
      path: `${routesPaths.courses.path}/${currentCourse!.id}`,
  }),
})

export { breadCrumbsModel, courseModel, calendarModel, searchModel, userModel }
