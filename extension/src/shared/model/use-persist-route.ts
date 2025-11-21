import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePersistRoute = () => {
  const location = useLocation();

  useEffect(() => {
    chrome.runtime.sendMessage({
      type: 'SET_LAST_ROUTE',
      route: location.pathname,
    });
  }, [location.pathname]);
};
