import { combine, createDomain, forward } from 'effector'
import { createReEffect } from 'effector-reeffect'
import { coursesMock } from '../../mock/mock'
import { createGate } from 'effector-react'

type Course = { id: number; title: string; teachers: Array<{ name: string; surname: string; patronymic?: string }> }

const getCourseFx = createReEffect({
  handler: async (id: string) => {
    const promise = new Promise<Course | null>((resolve, reject) =>
      setTimeout(() => {
        const course = coursesMock.find((course) => course.id === Number(id))

        if (course !== undefined) resolve(course)
        else reject(null)
      }, 100)
    )

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
  }),
  courseGate,
}
