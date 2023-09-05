chrome.runtime.onMessage.addListener(async function (request) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id!, request)
        }
    })
})


