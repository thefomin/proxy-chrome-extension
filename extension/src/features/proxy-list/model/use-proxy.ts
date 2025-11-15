import { rqClient } from '@/shared/api/instance.api';
import { useSession } from '@/shared/model/session-provider';

const PROXY_KEY = 'PROXY-LIST';

export function useProxy() {
  const { session } = useSession();
  if (!session) null;

  const userQuery = rqClient.useQuery('get', '/proxy', {
    queryKey: [PROXY_KEY],
    headers: {
      'x-auth-id': session?.user.authId ?? null,
    },
  });

  const errorMessage = userQuery.isError ? userQuery.error : undefined;

  return {
    proxy: userQuery.data,
    isPending: userQuery.isPending,
    errorMessage,
    isError: userQuery.isError,
  };
}
