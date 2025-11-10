export const STORAGE_PROXY_KEY = "proxyEnabled";

export const StorageArea = {
  LOCAL: "local" as const,
  SYNC: "sync" as const,
};
export type ProxySchema = "http" | "https" | "quic" | "socks4" | "socks5";
export type StorageAreaType = (typeof StorageArea)[keyof typeof StorageArea];

export enum ProxyMessage {
  CONNECT = "CONNECT_PROXY",
  DISCONNECT = "DISCONNECT_PROXY",
}
