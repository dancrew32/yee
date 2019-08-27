import React, { useState, useEffect, createRef } from "react";
import clsx from "clsx";

import { get } from "./network.ts";
import { A } from "hookrouter";
import { Modal } from "./modal.tsx";
import { useAppStore } from "./app_store.tsx";
import { Img } from "./img.tsx";
import { isScrollAtBottom } from "./dom.ts";

function Item(props) {
  const { product } = props;
  const [loaded, setLoaded] = useState(false);
  const src = product.image;
  const href = `/products/99`;
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

async function addProducts(appActions) {
  const response = await get("http://localhost:5000/api/");
  appActions.addProducts(response.content);
}

export default function Products() {
  const { appState, appActions } = useAppStore();

  function handleScroll() {
    if (isScrollAtBottom(100)) {
      console.log("fetch more");
		  // TODO: products fetching next
    }
  }

  useEffect(() => {
    addProducts(appActions);
		// TODO: products fetching initial return early
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="blocks">
      {appState.products.map((product, index) => (
        <Item key={index} product={product} />
      ))}
    </div>
  );
}
