import { useEffect, useState } from 'react';
import './index.css';
import { RouterProvider as Provider, createHashRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes';
import App from './app';
import { ProtectedRoute } from './protected-route';
import { Providers } from './providers';

export const RouterProvider = () => {
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
                  { path: ROUTES.PROXY_LIST, lazy: () => import('@/pages/proxy-list.page') },
                ],
              },
              { path: ROUTES.AUTH, lazy: () => import('@/pages/auth.page') },
            ],
          },
        ])
      );
    });
  }, []);

  if (!router) return null;

  return <Provider router={router} />;
};
