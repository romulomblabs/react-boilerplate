import React from "react";

const routeList = [
  {
    path: "/home",
    roles: ["root", "admin", "user"],
    component: React.lazy(() => import("src/pages/Home/Home")),
  },
  {
    path: "*",
    roles: ["root", "admin", "user"],
    component: React.lazy(() => import("src/pages/Error/not-found/NotFound")),
  },
];

export default routeList;
