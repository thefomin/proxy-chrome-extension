import { createHashRouter } from "react-router-dom";
import App from "./app";
import { ROUTES } from "@/shared/config/routes";
import { ProtectedRoute } from "./protected-route";
import { Providers } from "./providers";
//используем createHashRouter потому что расширения не имеют серверного роутинга
//вместо localhost
export const router = createHashRouter([
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
          {
            path: ROUTES.CONNECTION,
            lazy: () => import("@/pages/proxy-connection.page"),
          },
        ],
      },
      {
        path: ROUTES.SIGN_IN,
        lazy: () => import("@/pages/auth/sign-in.page"),
      },
      {
        path: ROUTES.SUGN_UP,
        lazy: () => import("@/pages/auth/sign-up.page"),
      },
      {
        path: ROUTES.PROXY_LIST,
        lazy: () => import("@/pages/proxy-list.page"),
      },
    ],
  },
]);
