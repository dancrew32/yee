import React from "react";

import { useStore } from "./app_store.tsx";

const plus = dispatch => {
  dispatch({ type: "INC" });
  dispatch({ type: "ADD_THING", thing: Math.random() });
};

const minus = (dispatch, thing) => {
  dispatch({ type: "DEC" });
  dispatch({ type: "REMOVE_THING", thing: thing });
};

export default function About() {
  const [state, dispatch] = useStore();
  return (
    <article>
      {state.count}
      {state.things.map(thing => {
        return (
          <div key={thing}>
            {thing}
            <button
              onClick={() => {
                minus(dispatch, thing);
              }}
            >
              -
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          plus(dispatch);
        }}
      >
        +
      </button>
    </article>
  );
}
