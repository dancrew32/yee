import React, { useEffect, useState } from "react";

import { get } from "./network.ts";
import { Editor } from "./editor.tsx";

import "./editor.less";

export default function Code() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await get("http://localhost:5000/api/");
      response.content && setData(response.content);
    })();
  }, []);

  if (!data) {
    return null;
  }

  return <Editor value={JSON.stringify(data, null, 2)} onChange={() => {}} />;
}
