import { createBrowserRouter, createHashRouter } from "react-router-dom";
// import { Providers } from "./providers"
import App from "./app";
import { ROUTES } from "@/shared/config/routes";
import { ProtectedRoute } from "./protected-route";

// используем createHashRouter потому что расширения не имеют серверного роутинга
//вместо localhost
export const router = createHashRouter([
  {
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.HOME,
            lazy: () => import("@/pages/home.page"),
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
    ],
  },
]);
