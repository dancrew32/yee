import React, { lazy, Suspense } from "react";
import { useRoutes } from "hookrouter";

import { Loading } from "./loading.tsx";

const Home = lazy(() => import("./home.tsx"));
const About = lazy(() => import("./about.tsx"));
const Products = lazy(() => import("./products.tsx"));
const Product = lazy(() => import("./product.tsx"));
const Code = lazy(() => import("./code.tsx"));
const NotFound = lazy(() => import("./404.tsx"));

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/products": () => <Products />,
  "/products/:id": ({ id }) => <Product id={id} />,
  "/code": () => <Code />
};

export function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <Suspense fallback={<Loading />}>{routeResult || <NotFound />}</Suspense>
  );
}
