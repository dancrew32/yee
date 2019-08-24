import React, { useState, useEffect, createRef } from "react";
import clsx from "clsx";
import { A } from "hookrouter";
import { Modal } from "./modal.tsx";
import { useAppStore } from "./app_store.tsx";
import { Img } from "./img.tsx";

function Item(props) {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState(0);
  const { id } = props;
  const src = `https://source.unsplash.com/random/${id}`;
  const href = `/products/${id}`;
  const imgRef = createRef();

  function onLoad(e) {
    setLoaded(true);
  }

  return (
    <A className={clsx("block", { loaded })} href={href}>
      <Img src={src} onLoad={onLoad} ref={imgRef} />
    </A>
  );
}

export default function Products() {
  const { appState, appActions } = useAppStore();
  const items = new Array(50).fill();
  return (
    <div className="blocks">
      <Modal
        show={appState.modalOpen}
        onClose={() => appActions.modalOpen(false)}
      >
        Testing a modal here man
      </Modal>

      <button type="button" onClick={() => appActions.modalOpen(true)}>
        Open Modal
      </button>
      {items.map((item, index) => (
        <Item key={index} id={index} />
      ))}
    </div>
  );
}
