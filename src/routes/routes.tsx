import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from './config'
import { breadCrumbsModel } from '../models/breadCrumbs'

export const Routes = () => {
  React.useEffect(() => {
    breadCrumbsModel.input.setStartPath({
      title: routes.find((route) => route.path === `/${location.pathname.split('/')[1]}`)?.title ?? '404',
      path: `/${location.pathname.split('/')[1]}`,
    })
  }, [location.pathname])

  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ))}
        <Redirect from={'/'} to={routes[0].path} />
        {/*<Redirect to={'/404'} />*/}
      </Switch>
    </Suspense>
  )
}
