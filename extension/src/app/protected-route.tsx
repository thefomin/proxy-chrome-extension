import { Outlet, Navigate } from 'react-router-dom';

import { ROUTES } from '@/shared/config/routes';
import { useSession } from '@/shared/model/session-provider';

export function ProtectedRoute() {
  const { session } = useSession();

  if (!session) {
    return <Navigate to={ROUTES.AUTH} />;
  }

  return <Outlet />;
}
