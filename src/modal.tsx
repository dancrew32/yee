import React from "react";

type PropsType = {
  show: boolean;
  onClose: () => void;
};

export function Modal(props: PropsType) {
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
          test
        </div>
      </div>
    </>
  );
}
