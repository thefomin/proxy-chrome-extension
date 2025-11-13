import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import App from './app';
import { ProtectedRoute } from './protected-route';
import { Providers } from './providers';

const Main = () => {
  const [router, setRouter] = useState<any>(null);

  useEffect(() => {
    chrome.storage.local.get(['lastRoute'], (result) => {
      const lastRoute = result.lastRoute || ROUTES.CONNECTION;

      if (window.location.hash.slice(1) !== lastRoute) {
        window.location.hash = lastRoute;
      }

      setRouter(
        createHashRouter([
          {
            element: (
              <Providers>
                <App />
              </Providers>
            ),
            children: [
              {
                element: <ProtectedRoute />,
                children: [
                  { path: ROUTES.CONNECTION, lazy: () => import('@/pages/proxy-connection.page') },
                ],
              },
              { path: ROUTES.SIGN_IN, lazy: () => import('@/pages/auth/sign-in.page') },
              { path: ROUTES.SUGN_UP, lazy: () => import('@/pages/auth/sign-up.page') },
              { path: ROUTES.PROXY_LIST, lazy: () => import('@/pages/proxy-list.page') },
            ],
          },
        ])
      );
    });
  }, []);

  if (!router) return null;

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
