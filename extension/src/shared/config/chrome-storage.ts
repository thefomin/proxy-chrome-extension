export const StorageArea = {
  LOCAL: "local" as const,
  SYNC: "sync" as const,
};

export type StorageAreaType = (typeof StorageArea)[keyof typeof StorageArea];