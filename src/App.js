import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./layout/Auth";
import { routeCreator } from "./helpers/routeHelper";
import routes from "./routing";
import Admin from "./layout/Admin";
import PageNotFound from "./view/Common/PageNotFound";
import User from "./layout/User";

function App() {
  const authRoutes = routes.authRoutes;
  const userRoutes = routes.userRoutes;
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          {routeCreator(authRoutes, false)}
        </Route>
        <Route path="/admin" element={<Admin />}>
          {routeCreator(authRoutes, false)}
        </Route>
        <Route path="/user" element={<User />}>
          {routeCreator(userRoutes, false)}
        </Route>
        <Route
          exact
          path="/"
          element={<Navigate to="/user/signin" replace />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
