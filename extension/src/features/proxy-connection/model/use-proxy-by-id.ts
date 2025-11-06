import { rqClient } from "@/shared/api/instance.api";

const PROXY_KEY = "PROXY";

export function useProxyById(id: string) {
  const userQuery = rqClient.useQuery("get", "/proxies/{id}", {
    params: {
      path: { id },
    },
    queryKey: [PROXY_KEY, id],
  });

  const errorMessage = userQuery.isError ? userQuery.error : undefined;

  return {
    proxy: userQuery.data,
    isPending: userQuery.isPending,
    errorMessage,
    isError: userQuery.isError,
  };
}
