import React from "react";
import ReactDOM from "react-dom";

import { AppRouter } from "./app_router.tsx";
import { Provider } from "./app_store.tsx";
import { Nav } from "./nav.tsx";
import "./main.less";

export const App = () => (
  <Provider>
    <Nav />
    <AppRouter />
  </Provider>
);

const node = document.getElementById("app");
node && ReactDOM.render(<App />, node);
