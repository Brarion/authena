import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from './config'

export const Routes = () => {

  console.log(location.pathname)
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ))}
        {routes.find((route) => route.path === location.pathname) === undefined && <Redirect to={'/404'} />}
      </Switch>
    </Suspense>
  )
}
