import React, {lazy, Suspense} from 'react';
import {useRoutes, A} from 'hookrouter';

const Home = lazy(() => import('./home.tsx'));
const About = lazy(() => import('./about.tsx'));
const NotFound = lazy(() => import('./404.tsx'));

const routes = {
  '/': () => <Home />
  '/about': () => <About />,
  '/products': () => <div>products <A href="/products/99">99</A></div>,
  '/products/:id': ({id}) => <div>product {id}</div>, 
};

export function AppRouter () {
  const routeResult = useRoutes(routes);
  return (
    <Suspense fallback="loading.">
			{routeResult || <NotFound />}
		</Suspense>
  );
};


