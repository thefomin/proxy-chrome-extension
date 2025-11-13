import { createContext, useContext } from 'react';
import { STORAGE_PROXY_KEY, StorageArea, ProxyMessage, ProxySchema } from '@/shared/config/proxy';
import { useStorage } from '@/shared/model/use-storage';
import { useProxyById } from './use-proxy-by-id';
import { ApiSchemas } from '@/shared/api/schema';
import { useSession } from '@/shared/model/session-provider';

interface ProxyConnectionContextValue {
  isConnected: boolean;
  connectProxy: () => Promise<void>;
  disconnectProxy: () => Promise<void>;
  proxy?: ApiSchemas['Proxy'];
  isPending: boolean;
  errorMessage?: string;
  setProxyParamsId: (id: string) => void;
}

const ProxyConnectionContext = createContext<ProxyConnectionContextValue | null>(null);

export const ProxyConnectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useStorage<boolean>(
    STORAGE_PROXY_KEY,
    false,
    StorageArea.LOCAL
  );
  const { session } = useSession();

  const { proxy, isPending, errorMessage } = useProxyById(session?.proxyId || '');

  const setProxyParamsId = (id: string) => {
    chrome.runtime.sendMessage({ type: 'SET_PROXY_ID', proxyId: id });
    console.log('Set proxy ID to', id);
  };

  const connectProxy = async () => {
    if (!proxy?.ip || !proxy?.port || !proxy?.protocol) return;

    const config: chrome.types.ChromeSettingSetDetails<chrome.proxy.ProxyConfig> = {
      value: {
        mode: 'fixed_servers',
        rules: {
          singleProxy: {
            scheme: proxy.protocol as ProxySchema,
            host: proxy.ip,
            port: proxy.port,
          },
        },
      },
      scope: 'regular',
    };
    try {
      chrome.runtime.sendMessage({ type: ProxyMessage.CONNECT, config }, (res) => {
        console.log('proxy ' + JSON.stringify(proxy));
      });
      setIsConnected(true);
    } catch (e) {
      console.error('Ошибка подключения', e);
    }
  };

  const disconnectProxy = async () => {
    try {
      await chrome.runtime.sendMessage({ type: ProxyMessage.DISCONNECT });
      setIsConnected(false);
    } catch (e) {
      console.error('Ошибка отключения', e);
    }
  };

  return (
    <ProxyConnectionContext.Provider
      value={{
        isConnected,
        connectProxy,
        disconnectProxy,
        proxy,
        isPending,
        errorMessage,
        setProxyParamsId,
      }}
    >
      {children}
    </ProxyConnectionContext.Provider>
  );
};

export const useProxyConnection = () => {
  const ctx = useContext(ProxyConnectionContext);
  if (!ctx)
    throw new Error('useProxyConnection должен использоваться внутри ProxyConnectionProvider');
  return ctx;
};
