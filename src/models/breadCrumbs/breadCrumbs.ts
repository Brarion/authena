import { combine, createDomain } from 'effector'
import { createGate } from 'effector-react'

type Path = {
  title: string
  path: string
}

const pathGate = createGate<Path>()

const breadCrumbsDomain = createDomain('bread crumbs')

const addPath = breadCrumbsDomain.createEvent<Path>()

const $path = breadCrumbsDomain
  .createStore<Path[]>([])
  .on(addPath, (path, item) => [...path, item])
  .on(pathGate.open, (_, path) => [path])

$path.updates.watch(console.log)

export const breadCrumbsModel = {
  $store: combine({
    path: $path,
  }),
  input: {
    addPath,
  },
  pathGate,
}
