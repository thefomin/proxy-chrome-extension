import { ProxyMessage } from '@/shared/config/proxy';
import { Session } from '@/shared/model/session-provider';

console.log('service_worker working...');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === ProxyMessage.CONNECT && message.config) {
    chrome.proxy.settings.set(message.config, async () => {
      console.log('PROXY ПОДКЛЮЧЕН');
      await chrome.storage.local.set({ proxyEnabled: true });
      sendResponse({ success: true });
    });
    return true;
  }
  if (message.type === ProxyMessage.DISCONNECT) {
    chrome.proxy.settings.clear({ scope: 'regular' }, async () => {
      console.log('Proxy отключен!');
      await chrome.storage.local.set({ proxyEnabled: false });
      sendResponse({ success: true });
    });
    return true;
  }
});

let session: Session = null;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'GET_SESSION':
      sendResponse({ session });
      break;
    case 'SET_SESSION':
      session = msg.session;
      chrome.storage.local.set({ session });
      break;
    case 'CLEAR_SESSION':
      session = null;
      chrome.storage.local.remove('session');
      break;
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SET_PROXY_ID') {
    chrome.storage.local.get(['session'], (result) => {
      const currentSession: Session | null = result.session || null;
      if (!currentSession) return;

      const updatedSession: Session = {
        ...currentSession,
        proxyId: message.proxyId,
      };

      session = updatedSession;

      chrome.storage.local.set({ session: updatedSession });
    });
    return true;
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SET_LAST_ROUTE') {
    chrome.storage.local.set({ lastRoute: message.route });
  }

  if (message.type === 'GET_LAST_ROUTE') {
    chrome.storage.local.get(['lastRoute'], (result) => {
      sendResponse({ route: result.lastRoute || '/' });
    });
    return true;
  }
});
