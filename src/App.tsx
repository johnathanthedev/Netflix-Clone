import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { routes, protectedRoutes } from "./config/routes";
import Auth0ProviderWithHistory from "./components/auth/Auth0ProviderWithHistory";
import PrivateRoute from "./components/auth/PrivateRoute";
import NavBar from "./components/main/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <NavBar />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              );
            })}
            {protectedRoutes.map((route, index) => {
              return (
                <PrivateRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component {...props} {...route.props} />
                  )}
                />
              );
            })}
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;
