import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import Router from "./routes";
import store from "./store";

import "antd/dist/reset.css";

const replaceHashPath = () => {
  const history = createBrowserHistory();
  const hash = history.location.hash;
  if (hash) {
    const path = hash.replace(/^#/, "");
    if (path) {
      history.replace(path);
    }
  }
};
replaceHashPath();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
