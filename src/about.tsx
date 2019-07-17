import React from "react";

import { useAppStore } from "./app_store.tsx";

const plus = appDispatch => {
  appDispatch({ type: "INC" });
  appDispatch({ type: "ADD_THING", thing: Math.random() });
};

const minus = (appDispatch, thing) => {
  appDispatch({ type: "DEC" });
  appDispatch({ type: "REMOVE_THING", thing: thing });
};

export default function About() {
  const { appState, appDispatch } = useAppStore();
  return (
    <article>
      {appState.count}
      {appState.things.map(thing => {
        return (
          <div key={thing}>
            {thing}
            <button
              onClick={() => {
                appDispatch({ type: "fuck" });
                minus(appDispatch, thing);
              }}
            >
              -
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          plus(appDispatch);
        }}
      >
        +
      </button>
    </article>
  );
}
