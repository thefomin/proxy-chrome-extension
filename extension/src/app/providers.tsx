import { ProxyConnectionProvider } from "@/shared/provider/proxy-connection-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProxyConnectionProvider>{children}</ProxyConnectionProvider>;
}
