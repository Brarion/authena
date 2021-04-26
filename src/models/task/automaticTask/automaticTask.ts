import { combine, createDomain, forward } from 'effector'
import { createReEffect } from 'effector-reeffect'

const sendTaskFx = createReEffect({
  handler: async () => {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 1000)
    })

    return await promise.then(() => true).catch(() => false)
  },
})

const automaticTaskDomain = createDomain('automatic task')

const setLanguage = automaticTaskDomain.createEvent<string>()

const setFile = automaticTaskDomain.createEvent<File>()

const sendTask = automaticTaskDomain.createEvent()

const $language = automaticTaskDomain.createStore<string>('').on(setLanguage, (_, language) => language)

const $file = automaticTaskDomain.createStore<File | null>(null).on(setFile, (_, file) => file)

const $taskSent = automaticTaskDomain.createStore<boolean>(false).on(sendTaskFx.doneData, () => true)

forward({ from: sendTask, to: sendTaskFx })

export const automaticTaskModel = {
  $store: combine<{ language: string; file: File; taskSent: boolean }>({
    language: $language,
    file: $file,
    taskSent: $taskSent,
  }),
  input: {
    setLanguage,
    setFile,
    sendTask,
  },
}
