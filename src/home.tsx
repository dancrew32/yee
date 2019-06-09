import React from "react";

import md from "./home.md";

export default function Home() {
  return <article dangerouslySetInnerHTML={{ __html: md }} />;
}
