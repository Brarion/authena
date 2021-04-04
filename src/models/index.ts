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
    filter: ({ currentCourse }) => Boolean(currentCourse),
  }),
  target: breadCrumbsModel.input.addPath,
  fn: ({ currentCourse }) => {
    console.log(currentCourse)
    return {
      title: currentCourse!.title,
      path: `${routesPaths.courses.path}/${currentCourse!.id}`,
    }
  },
})

export { breadCrumbsModel, courseModel, calendarModel, searchModel, userModel }
