import { combine, createDomain, forward } from 'effector'
import { createReEffect } from 'effector-reeffect'
import { createGate } from 'effector-react'
import { Course, CourseMock } from '../../mock/courseMock'

const getCourseFx = createReEffect({
  handler: async (id: string) => {
    const promise = new Promise<Course | null>((resolve, reject) => {
      setTimeout(() => {
        if (id === 'tmp') reject(null)

        resolve(CourseMock)
      }, 500)
    })

    const res: Course | null = await promise.then((course) => course).catch((error) => error)

    return res
  },
})

const courseGate = createGate<string>()

const courseDomain = createDomain('course')

const $currentCourse = courseDomain.createStore<Course | null>(null).on(getCourseFx.doneData, (_, course) => course)

forward({ from: courseGate.open, to: getCourseFx })

$currentCourse.updates.watch(console.log)

export const courseModel = {
  $store: combine({
    currentCourse: $currentCourse,
    pending: getCourseFx.pending,
  }),
  courseGate,
}
