export const STORAGE_KEY = "proxyEnabled";

export const StorageArea = {
  LOCAL: "local" as const,
  SYNC: "sync" as const,
};

export type StorageAreaType = (typeof StorageArea)[keyof typeof StorageArea];

export const proxyConfig: chrome.types.ChromeSettingSetDetails<chrome.proxy.ProxyConfig> =
  {
    value: {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "socks5",
          host: "74.119.147.209",
          port: 4145,
        },
      },
    },
    scope: "regular",
  };

export enum ProxyMessage {
  CONNECT = "CONNECT_PROXY",
  DISCONNECT = "DISCONNECT_PROXY",
}
