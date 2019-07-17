import React from "react";

import { useAppStore } from "./app_store.tsx";

export default function About() {
  const { appState, appActions } = useAppStore();
  return (
    <article>
      {appState.count}
      {appState.things.map(thing => {
        return (
          <div key={thing}>
            {thing}
            <button
              onClick={() => {
                appActions.removeThing(thing);
                appActions.decrement();
              }}
            >
              -
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          appActions.addThing(Math.random().toString());
          appActions.increment();
        }}
      >
        +
      </button>
    </article>
  );
}
