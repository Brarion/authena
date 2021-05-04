import { combine, createDomain } from 'effector'

type Path = {
  title: string
  path: string
}

const breadCrumbsDomain = createDomain('bread crumbs')

const addPath = breadCrumbsDomain.createEvent<Path>()
const setStartPath = breadCrumbsDomain.createEvent<Path>()
const addFullPath = breadCrumbsDomain.createEvent<Path[]>()

const $path = breadCrumbsDomain
  .createStore<Path[]>([])
  .on(addPath, (path, item) => [...path, item])
  .on(setStartPath, (_, path) => [path])
  .on(addFullPath, (path, newPart) => [...path, ...newPart])

$path.updates.watch(console.log)

export const breadCrumbsModel = {
  $store: combine({
    path: $path,
  }),
  input: {
    addPath,
    setStartPath,
    addFullPath,
  },
}
