chrome.webRequest.onCompleted.addListener(
  async function (details) {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    console.log(details.url);
    const response = await chrome.tabs.sendMessage(tab.id, {
        url: details.url,
    });
  },
  { urls: ["*://*.neal.fun/*","*://*.google.com/*"] }
);
