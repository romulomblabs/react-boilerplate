/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "src/pages/Error/not-found/NotFound";
import LayoutPage from "src/pages/Layout";
import Login from "src/pages/Login/LoginForm";

import routeList from "./routeList";

function Router() {
  const user = { token: true, userInfo: { role: 1 } };
  const { userInfo } = user;

  const formatRole = (role: number): string | undefined => {
    switch (role) {
      case 1:
        return "user";
      case 2:
        return "admin";
      case 3:
        return "root";
      default:
        break;
    }
  };

  const handleFilterComponent = (route: any) => {
    return route.roles.includes(formatRole(userInfo.role));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/forget" element={<Forget />} /> */}
        {user.token && <Route path="*" element={<NotFound />} />}
        {user.token ? (
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<Navigate to="/home" />} />
            {routeList.map(route => {
              return (
                handleFilterComponent(route) && (
                  <Route
                    key={route?.path}
                    path={route?.path}
                    element={<route.component />}
                  />
                )
              );
            })}
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
