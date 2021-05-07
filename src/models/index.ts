import { sample, guard } from 'effector'

import { breadCrumbsModel } from './breadCrumbs'
import { courseModel } from './course'
import { calendarModel } from './calendar'
import { searchModel } from './search'
import { userModel } from './user'
import { taskModel } from './task'
import { fullCalendarModel } from './fullCalendar'

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

sample({
  source: guard({
    source: taskModel.$store,
    filter: ({ task }) => task !== null,
  }),
  clock: taskModel.$store.map((store) => store.task).updates,
  target: breadCrumbsModel.input.addFullPath,
  fn: ({ task }) => [
    { title: task!.courseName, path: `${routesPaths.courses.path}/${task!.courseID}` },
    {
      title: task!.name,
      path: `${routesPaths.courses.path}/${task!.id}`,
    },
  ],
})

export { breadCrumbsModel, courseModel, calendarModel, searchModel, userModel, taskModel, fullCalendarModel }
