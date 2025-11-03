import { Outlet, Navigate } from "react-router-dom";

import { ROUTES } from "@/shared/config/routes";
import { useSession } from "@/shared/model/session";

export function ProtectedRoute() {
  const { session } = useSession();
  if (!session) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <Outlet />;
}
