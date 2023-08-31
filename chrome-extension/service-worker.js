chrome.webRequest.onCompleted.addListener(
	async function (details) {
		const [tab] = await chrome.tabs.query({
			active: true,
			lastFocusedWindow: true,
		})
		if (!tab) return
		try {
			await chrome.tabs.sendMessage(tab.id, {
				url: details.url,
			})
		} catch (err) {}
	},
	{ urls: ["https://*.neal.fun/*"] }
)
