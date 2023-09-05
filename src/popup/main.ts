const autoComplete = document.getElementById("auto-complete") as HTMLInputElement
const suggestions = document.getElementById("suggestions") as HTMLInputElement
const bugFeeder = document.getElementById("bug-feeder") as HTMLInputElement
const stopWatch = document.getElementById("stop-watch") as HTMLInputElement


chrome.storage.local.get(["auto-complete", "suggestions", "bug-feeder", "stop-watch"], (result) => {
    autoComplete.checked = result["auto-complete"]
    suggestions.checked = result["suggestions"]
    bugFeeder.checked = result["bug-feeder"]
    stopWatch.checked = result["stop-watch"]
    console.log(result)
    Object.keys(result).forEach((key) => {
        if (result[key]) {
            chrome.runtime.sendMessage({ type: key, checked: true })
        }
    })
})

document.getElementById("auto-complete")!.addEventListener("change", (e) => {
    const checked = (e.target as HTMLInputElement).checked
    chrome.storage.local.set({ "auto-complete": checked })
    chrome.runtime.sendMessage({ type: "auto-complete", checked })

})

document.getElementById("suggestions")!.addEventListener("change", (e) => {
    const checked = (e.target as HTMLInputElement).checked
    chrome.storage.local.set({ "suggestions": checked })
    chrome.runtime.sendMessage({ type: "suggestions", checked })
})

document.getElementById("bug-feeder")!.addEventListener("change", (e) => {
    const checked = (e.target as HTMLInputElement).checked
    chrome.storage.local.set({ "bug-feeder": checked })
    chrome.runtime.sendMessage({ type: "bug-feeder", checked })
})

document.getElementById("stop-watch")!.addEventListener("change", (e) => {
    const checked = (e.target as HTMLInputElement).checked
    chrome.storage.local.set({ "stop-watch": checked })
    chrome.runtime.sendMessage({ type: "stop-watch", checked })
})



