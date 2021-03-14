import { LazyExoticComponent, ReactElement } from 'react'

export type LazyLoadedComponent = LazyExoticComponent<() => ReactElement>
export type CommonComponent = () => ReactElement

export type AppRoute = {
  title: string
  path: string
  component: LazyLoadedComponent | CommonComponent
  exact?: boolean
}
