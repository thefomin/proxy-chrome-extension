import { rqClient } from "@/shared/api/instance.api";

const PROXY_KEY = "PROXY-LIST";

export function useProxy() {
  const userQuery = rqClient.useQuery("get", "/proxies", {
    queryKey: [PROXY_KEY],
  });

  const errorMessage = userQuery.isError ? userQuery.error : undefined;

  return {
    proxy: userQuery.data,
    isPending: userQuery.isPending,
    errorMessage,
    isError: userQuery.isError,
  };
}
