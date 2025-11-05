import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

import { StorageAreaType } from "../config/proxy";

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useStorage<T>(
  key: string,
  initialValue: T,
  area: StorageAreaType = "local"
): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    readStorage<T>(key, area).then((res) => {
      if (res) setStoredValue(res);
    });

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === area && changes.hasOwnProperty(key)) {
        if (changes[key].newValue) setStoredValue(changes[key].newValue);
      }
    });
  }, []);

  const setValueRef = useRef<SetValue<T> | null>(null);

  setValueRef.current = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStoredValue((prevState) => {
      setStorage<T>(key, newValue, area).then((success) => {
        if (!success) setStoredValue(prevState);
      });

      return newValue;
    });
  };

  const setValue: SetValue<T> = useCallback(
    (value) => setValueRef.current?.(value),
    []
  );

  return [storedValue, setValue];
}

export async function readStorage<T>(
  key: string,
  area: StorageAreaType = "local"
): Promise<T | undefined> {
  try {
    const result = await chrome.storage[area].get(key);
    return result?.[key];
  } catch (error) {
    console.warn(`Error reading ${area} storage key "${key}":`, error);
    return undefined;
  }
}

export async function setStorage<T>(
  key: string,
  value: T,
  area: StorageAreaType = "local"
): Promise<boolean> {
  try {
    await chrome.storage[area].set({ [key]: value });
    return true;
  } catch (error) {
    console.warn(`Error setting ${area} storage key "${key}":`, error);
    return false;
  }
}
