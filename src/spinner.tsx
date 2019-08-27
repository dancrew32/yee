import React from "react";
import clsx from "clsx";

import "./spinner.less";

export function Spinner(props) {
  const classNames = clsx("spinner", {
    "spinner-show": props.show,
    "spinner-top": props.top,
    "spinner-bottom": props.bottom
  });
  return <div className={classNames} />;
}
