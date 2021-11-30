import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

import { routes, protectedRoutes } from './config/routes'
import Auth0ProtectedRoute from './components/auth/Auth0ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
          {protectedRoutes.map((route, index) => {
            return (
              <Auth0ProtectedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
