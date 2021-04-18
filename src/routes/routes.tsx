import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from './config'
import { useGate } from 'effector-react'
import { breadCrumbsModel } from '../models'

export const Routes = () => {
  useGate(breadCrumbsModel.pathGate, {
    title: routes.find((route) => route.path === `/${location.pathname.split('/')[1]}`)?.title ?? '404',
    path: `/${location.pathname.split('/')[1]}`,
  })

  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ))}
        <Redirect to={'/404'} />
        <Redirect from={'/'} to={routes[0].path} />
      </Switch>
    </Suspense>
  )
}
