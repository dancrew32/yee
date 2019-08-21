import React from "react";
import { A } from "hookrouter";
import { Modal } from "./modal.tsx";
import { useAppStore } from "./app_store.tsx";

function Item(props) {
  const { id } = props;
  return (
    <A className="block" href={`/products/${id}`}>
      <img src={`https://source.unsplash.com/random/${id}`} alt="" />
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
