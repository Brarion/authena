import { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from './config'

export const Routes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}
