import { combine, createDomain, forward } from 'effector'
import { createReEffect } from 'effector-reeffect'
import { Task, TaskMock } from '../../mock/taskMock'
import { createGate } from 'effector-react'

const getTaskFx = createReEffect({
  handler: async (id: string) => {
    const promise = new Promise<Task | null>((resolve, reject) => {
      setTimeout(() => {
        if (id === 'tmp') reject(null)

        resolve(TaskMock)
      }, 500)
    })

    const res: Task | null = await promise.then((task) => task).catch((error) => error)

    return res
  },
})

const taskGate = createGate<string>()

const taskDomain = createDomain('task')

const $task = taskDomain.createStore<Task | null>(null).on(getTaskFx.doneData, (_, task) => task)

forward({
  from: taskGate.open,
  to: getTaskFx,
})

export const taskModel = {
  $store: combine<{ task: Task | null; pending: boolean }>({
    task: $task,
    pending: getTaskFx.pending,
  }),
  taskGate,
}
