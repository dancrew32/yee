import React, { useEffect, ReactNode } from "react";

import { useAppStore } from "./app_store.tsx";

type PropsType = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal(props: PropsType) {
  const { appState } = useAppStore();

  useEffect(() => {
    document.body.classList.toggle("modal-open", appState.modalOpen);
    // TODO: escape key listener on window
  }, [appState.modalOpen]);

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop" onClick={props.onClose} />
      <div className="modal">
        <button type="button" className="modal-close" onClick={props.onClose}>
          X
        </button>
        <div className="modal-inner" autoFocus>
          {props.children}
        </div>
      </div>
    </>
  );
}
