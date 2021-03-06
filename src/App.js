import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, protectedRoutes } from "./config/routes";
import NavBar from "./components/main/NavBar";
import Auth0ProviderWithHistory from "./components/auth/Auth0ProviderWithHistory";
import PrivateRoute from "./components/auth/PrivateRoute";
import Browse from "./components/views/user/Browse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <NavBar />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
            {/* <PrivateRoute exact key="1" path="/browse" element={Browse} /> */}

            {protectedRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<PrivateRoute>{route.component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;
