import React from "react";
import ReactDOM from "react-dom";

import { AppRouter } from "./app_router.tsx";
import { AppProvider } from "./app_store.tsx";
import { Nav } from "./nav.tsx";
import "./main.less";

export const App = () => (
  <AppProvider>
    <Nav />
    <AppRouter />
  </AppProvider>
);

const node = document.getElementById("app");
node && ReactDOM.render(<App />, node);
