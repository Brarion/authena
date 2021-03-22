import { combine, createDomain } from 'effector'
import { createGate } from 'effector-react'

type TUser = {
  name: string
  surname: string
}

const gate = createGate()

const userDomain = createDomain('user')

// TODO ReEffect and null
const $user = userDomain.createStore<TUser | null>({ name: 'Киша', surname: 'Молесников' })

export const userModel = {
  $store: combine({
    user: $user,
  }),
  gate,
}
