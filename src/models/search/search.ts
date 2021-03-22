import { combine, createDomain } from 'effector'
import { createGate } from 'effector-react'

const gate = createGate()

const searchDomain = createDomain('search')

const setSearch = searchDomain.createEvent<string>()

const $search = searchDomain
  .createStore<string>('')
  .on(setSearch, (_, search) => search)
  .reset(gate.open)

export const searchModel = {
  $store: combine({
    search: $search,
  }),
  input: {
    setSearch,
  },
  gate,
}
