import React from "react";

const routeList = [
  {
    path: "/home",
    roles: ["root", "admin", "user"],
    component: React.lazy(() => import("src/pages/Home/Home")),
  },
  //   {
  //     path: "/user-menu/user-list",
  //     roles: ["root", "admin"],
  //     component: React.lazy(() => import("src/pages/User/user-list")),
  //   },
  //   {
  //     path: "/setting-menu/user-setting/basic-info",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Setting/My/basic-info")),
  //   },
  //   {
  //     path: "/setting-menu/user-setting/modify-password",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Setting/My/modify-password")),
  //   },
  //   {
  //     path: "/module/excel",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Module/excel")),
  //   },
  //   {
  //     path: "/module/zip",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Module/zip")),
  //   },
  //   {
  //     path: "/module/pdf-preview",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Module/pdf-preview")),
  //   },
  //   {
  //     path: "/error/no-authority",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Error/no-authority")),
  //   },
  //   {
  //     path: "/error/not-found",
  //     roles: ["root", "admin", "user"],
  //     component: React.lazy(() => import("src/pages/Error/not-found")),
  //   },
  {
    path: "*",
    roles: ["root", "admin", "user"],
    component: React.lazy(() => import("src/pages/Error/not-found/NotFound")),
  },
];

export default routeList;
