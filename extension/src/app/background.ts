import { proxyConfig, ProxyMessage } from "@/shared/config/proxy";

console.log("service_worker working...");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === ProxyMessage.CONNECT && message.config) {
    chrome.proxy.settings.set(message.config, async () => {
      console.log("PROXY ПОДКЛЮЧЕН");
      await chrome.storage.local.set({ proxyEnabled: true });
      sendResponse({ success: true });
    });
    return true;
  }
  if (message.type === ProxyMessage.DISCONNECT) {
    chrome.proxy.settings.clear({ scope: "regular" }, async () => {
      console.log("Proxy отключен!");
      await chrome.storage.local.set({ proxyEnabled: false });
      sendResponse({ success: true });
    });
    return true;
  }
});
