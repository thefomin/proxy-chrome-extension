import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRestoreRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'GET_LAST_ROUTE' }, (response) => {
      if (response?.route) {
        navigate(response.route, { replace: true });
      }
    });
  }, []);
};
