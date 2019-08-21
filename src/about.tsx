import React, { useEffect } from "react";

import { useAppStore } from "./app_store.tsx";
import { get, post } from "./network.ts";

export default function About() {
  const { appState, appActions } = useAppStore();

  useEffect(() => {
    (async () => {
      const getData = await get("https://httpbin.org/get");
      const postData = await post("https://httpbin.org/post", { foo: "bar" });
      console.log(getData, postData);
    })();
  }, []);

  return (
    <article className="blocks" data-count={appState.count}>
      {appState.things.map(thing => {
        return (
          <div key={thing} className="block">
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
      <div className="block">
        <button
          onClick={() => {
            appActions.addThing(Math.random().toString());
            appActions.increment();
          }}
        >
          +
        </button>
      </div>
    </article>
  );
}
