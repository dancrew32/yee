import React, { useEffect, useState } from "react";

import { useAppStore } from "./app_store.tsx";
import { get, post } from "./network.ts";
import { Modal } from "./modal.tsx";

export default function About() {
  const { appState, appActions } = useAppStore();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const getData = await get("https://httpbin.org/get");
      const postData = await post("https://httpbin.org/post", { foo: "bar" });
      console.log(getData, postData);
      setOpen(true);
    })();
  }, []);

  return (
    <article className="blocks" data-count={appState.count}>
      <Modal show={isOpen} onClose={() => setOpen(false)} />
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
