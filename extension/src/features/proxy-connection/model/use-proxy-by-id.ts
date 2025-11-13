import { rqClient } from '@/shared/api/instance.api';
import { useSession } from '@/shared/model/session-provider';

const PROXY_KEY = 'PROXY';

export function useProxyById(id: string) {
  const { session } = useSession();

  const userQuery = rqClient.useQuery('get', '/proxy/{id}', {
    params: {
      path: { id },
    },
    queryKey: [PROXY_KEY, id],
    headers: session ? { 'x-auth-id': session.user.authId } : undefined,
    enabled: !!session,
  });

  const errorMessage = userQuery.isError ? userQuery.error : undefined;

  return {
    proxy: userQuery.data,
    isPending: userQuery.isPending,
    errorMessage,
    isError: userQuery.isError,
  };
}
