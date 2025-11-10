import { ProxyConnectionProvider } from "@/features/proxy-connection/model/proxy-connection-provider";
import { queryClient } from "@/shared/api/query-client";
import { SessionProvider } from "@/shared/model/session-provider";
import { QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ProxyConnectionProvider>{children}</ProxyConnectionProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
