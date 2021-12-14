import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, protectedRoutes } from "./config/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Auth0ProviderWithHistory> */}
        {/* <NavBar /> */}
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
          {protectedRoutes.map((route, index) => {
            return (
              <Route
                exact
                key={index}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
        {/* </Auth0ProviderWithHistory> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
