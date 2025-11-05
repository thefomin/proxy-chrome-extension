import { createContext, useContext } from "react";
import { STORAGE_KEY, StorageArea, ProxyMessage } from "@/shared/config/proxy";
import { useStorage } from "@/shared/model/use-storage";

interface ProxyConnectionContextValue {
  isConnected: boolean;
  connectProxy: () => Promise<void>;
  disconnectProxy: () => Promise<void>;
}

const ProxyConnectionContext =
  createContext<ProxyConnectionContextValue | null>(null);

export const ProxyConnectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isConnected, setIsConnected] = useStorage<boolean>(
    STORAGE_KEY,
    false,
    StorageArea.LOCAL
  );

  const connectProxy = async () => {
    try {
      await chrome.runtime.sendMessage({ type: ProxyMessage.CONNECT });
      setIsConnected(true);
    } catch (e) {
      console.error("Ошибка подключения", e);
    }
  };

  const disconnectProxy = async () => {
    try {
      await chrome.runtime.sendMessage({ type: ProxyMessage.DISCONNECT });
      setIsConnected(false);
    } catch (e) {
      console.error("Ошибка отключения", e);
    }
  };

  return (
    <ProxyConnectionContext.Provider
      value={{ isConnected, connectProxy, disconnectProxy }}
    >
      {children}
    </ProxyConnectionContext.Provider>
  );
};

export const useProxyConnection = () => {
  const context = useContext(ProxyConnectionContext);
  if (!context)
    throw new Error(
      "useProxyConnection должен использоваться внутри ProxyConnectionProvider"
    );
  return context;
};
