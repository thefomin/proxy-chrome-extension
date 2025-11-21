import { useNavigate } from 'react-router-dom';

import { publicRqClient } from '@/shared/api/instance.api';
import { ROUTES } from '@/shared/config/routes';
import { useSession } from '@/shared/model/session-provider';
import { ApiSchemas } from '@/shared/api/schema';

interface RegisterResponse {
  user: {
    id: string;
    authId: string;
  };
  proxyId: string;
}

export function useRegister() {
  const navigate = useNavigate();
  const session = useSession();

  const registerMutation = publicRqClient.useMutation('post', '/auth/register', {
    onSuccess(data: ApiSchemas['Session']) {
      session.login({
        user: {
          authId: data.user.authId,
        },
        proxyId: data.proxyId,
      });
      navigate(ROUTES.CONNECTION);
    },
  });

  const register = () => {
    registerMutation.mutate({ body: {} });
  };

  const errorMessage = registerMutation.isError ? registerMutation.error : undefined;

  return {
    register,
    isPending: registerMutation.isPending,
    errorMessage,
  };
}
