import React from "react";

import CodeMirror from "react-codemirror";
import "codemirror/keymap/vim.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/twilight.css";

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

export function Editor(props: PropsType) {
  const options = {
    keyMap: "vim",
    //mode: "html",
    theme: "twilight"
    //lineNumbers: true
  };

  function onChange(editor, data, value) {
    props.onChange(value);
  }

  return (
    <CodeMirror
      autoFocus
      value={props.value}
      options={options}
      onChange={onChange}
    />
  );
}
