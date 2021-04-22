import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import {routes} from './config'
import {breadCrumbsModel} from '../models'

export const Routes = () => {
  React.useEffect(() => {
    breadCrumbsModel.input.setPath({
      title: routes.find((route) => route.path === `/${location.pathname.split('/')[1]}`)?.title ?? '404',
      path: `/${location.pathname.split('/')[1]}`,
    })
  }, [])

  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
        ))}
        <Redirect exact from={'/'} to={'/courses'}/>
        <Redirect from={'*'} to={'/404'}/>
      </Switch>
    </Suspense>
  )
}
