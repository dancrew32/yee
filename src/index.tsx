import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "./nav.tsx";
import { AppRouter } from "./app_router.tsx";
import "./main.less";

export const App = () => (
  <div>
    <Nav />
    <AppRouter />
  </div>
);

const node = document.getElementById("app");
node && ReactDOM.render(<App />, node);
