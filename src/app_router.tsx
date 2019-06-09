import React, { lazy, Suspense } from "react";
import { useRoutes } from "hookrouter";

const Home = lazy(() => import("./home.tsx"));
const About = lazy(() => import("./about.tsx"));
const Products = lazy(() => import("./products.tsx"));
const NotFound = lazy(() => import("./404.tsx"));

const Loading = () => <div>Loading...</div>;

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/products": () => <Products />,
  "/products/:id": ({ id }) => <div>product {id}</div>
};

export function AppRouter() {
  const routeResult = useRoutes(routes);
  return (
    <Suspense fallback={<Loading />}>{routeResult || <NotFound />}</Suspense>
  );
}
