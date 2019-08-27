import React, { useEffect } from "react";

import { useAppStore } from "./app_store.tsx";
import { get, post } from "./network.ts";
import { Modal } from "./modal.tsx";

async function fetchAbout(appActions) {
  const getData = await get("https://httpbin.org/get");
  const postData = await post("https://httpbin.org/post", { foo: "bar" });
  console.log(getData, postData);
  appActions.modalOpen(true);
}

export default function About() {
  const { appState, appActions } = useAppStore();

  useEffect(() => {
		fetchAbout(appActions);
  }, []);

  return (
    <article className="blocks">
      <Modal
        show={appState.modalOpen}
        onClose={() => appActions.modalOpen(false)}
      >
        Testing a modal here man
      </Modal>
    </article>
  );
}
