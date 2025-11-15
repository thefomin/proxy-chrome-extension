import React, { createContext, useContext, useEffect, useState } from 'react';
import { useStorage } from '@/shared/model/use-storage';
import { StorageArea } from '../config/chrome-storage';

export type Session = {
  user: {
    authId: string;
  };
  proxyId: string;
} | null;

type SessionContextType = {
  session: Session;
  login: (data: Session) => void;
  logout: () => void;
};

const STORAGE_KEY = 'session';

const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useStorage<Session>(STORAGE_KEY, null, StorageArea.LOCAL);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'GET_SESSION' }, (response) => {
      if (response?.session) setSession(response.session);
      setIsLoading(false);
    });
  }, []);

  const login = (data: Session) => {
    chrome.runtime.sendMessage({ type: 'SET_SESSION', session: data });
    setSession(data);
  };

  const logout = () => {
    chrome.runtime.sendMessage({ type: 'CLEAR_SESSION' });
    setSession(null);
  };

  if (isLoading) return null;

  return (
    <SessionContext.Provider value={{ session, login, logout }}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used inside SessionProvider');
  return ctx;
};
