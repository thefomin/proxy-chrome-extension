import { ProxyConnectionProvider } from "@/features/proxy-connection/model/proxy-connection-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProxyConnectionProvider>{children}</ProxyConnectionProvider>;
}
