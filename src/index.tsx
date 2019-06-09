import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "./nav.tsx";
import { AppRouter } from "./app_router.tsx";
import "./main.less";

const App = () => (
  <div>
    <Nav />
    <AppRouter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
