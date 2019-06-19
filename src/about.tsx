import React from "react";

import { useStore } from "./app_store.tsx";

export default function About() {
  const [state, dispatch] = useStore();
  return (
    <article>
      {JSON.stringify(state)}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </article>
  );
}
