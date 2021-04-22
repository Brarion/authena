import {combine, createDomain} from 'effector'

type Path = {
  title: string
  path: string
}

const breadCrumbsDomain = createDomain('bread crumbs')

const setPath = breadCrumbsDomain.createEvent<Path>()
const addPath = breadCrumbsDomain.createEvent<Path>()

const $path = breadCrumbsDomain
  .createStore<Path[]>([])
  .on(addPath, (path, item) => [...path, item])
  .on(setPath, (_, path) => [path])

export const breadCrumbsModel = {
  $store: combine<{ path: Path[] }>({
    path: $path,
  }),
  input: {
    addPath,
    setPath
  }
}
