import React, { useState, useEffect, createRef } from "react";
import clsx from "clsx";

import { get } from "./network.ts";
import { A } from "hookrouter";
import { Modal } from "./modal.tsx";
import { useAppStore } from "./app_store.tsx";
import { Img } from "./img.tsx";
import { Spinner } from "./spinner.tsx";
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
  appActions.setProductsInitialLoading(true);
  const response = await get("http://localhost:5000/api/");
  appActions.addProducts(response.content);
  appActions.setProductsInitialLoading(false);
}

async function addMoreProducts(appActions) {
  appActions.setProductsNextLoading(true);
  const response = await get("http://localhost:5000/api/");
  appActions.addProducts(response.content);
  appActions.setProductsNextLoading(false);
}

export default function Products() {
  const { appState, appActions } = useAppStore();

  function handleScroll() {
    if (isScrollAtBottom(100)) {
      addMoreProducts(appActions);
    }
  }

  useEffect(() => {
    appActions.setProductsInitialLoading(true);
    addProducts(appActions);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Spinner show={appState.productsInitialLoading} top />
      <div className="blocks">
        {appState.products.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>
      <Spinner show={appState.productsNextLoading} bottom />
    </>
  );
}
