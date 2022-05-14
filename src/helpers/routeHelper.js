import { Route } from "react-router-dom";

export const appRoutes = [];
export const routeCreator = (currentRoutes, authorization) => {
  return currentRoutes.map((route) => {
    if (route.authorization === authorization) {
      return (
        <Route path={route.route} element={route.element} key={route.name} />
      );
    }
  });
};
