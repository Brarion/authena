import { combine, createDomain, forward } from 'effector'
import { createReEffect } from 'effector-reeffect'
import { Task, TaskMock, TryHistory, tryHistoryMock } from '../../mock/taskMock'
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

const getTryHistoryFx = createReEffect({
  handler: async (id: string) => {
    const promise = new Promise<TryHistory[]>((resolve, reject) => {
      setTimeout(() => {
        if (id === 'tmp') reject(null)

        resolve(tryHistoryMock)
      }, 500)
    })

    const res: TryHistory[] = await promise.then((history) => history).catch((_) => [])

    return res
  },
})

const taskGate = createGate<string>()

const taskDomain = createDomain('task')

const $task = taskDomain.createStore<Task | null>(null).on(getTaskFx.doneData, (_, task) => task)

const $tryHistory = taskDomain.createStore<TryHistory[]>([]).on(getTryHistoryFx.doneData, (_, history) => history)

forward({
  from: taskGate.open,
  to: [getTaskFx, getTryHistoryFx],
})

export const taskModel = {
  $store: combine<{ task: Task | null; taskPending: boolean; tryHistory: TryHistory[]; historyPending: boolean }>({
    task: $task,
    taskPending: getTaskFx.pending,
    tryHistory: $tryHistory,
    historyPending: getTryHistoryFx.pending,
  }),
  taskGate,
}
