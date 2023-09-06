const autoComplete = document.getElementById("auto-complete") as HTMLInputElement
const suggestions = document.getElementById("suggestions") as HTMLInputElement
const bugFeeder = document.getElementById("bug-feeder") as HTMLInputElement

const txtAutoComplete = document.getElementById("txt-auto-complete") as HTMLInputElement
const txtSuggestions = document.getElementById("txt-suggestions") as HTMLInputElement
const txtBugFeeder = document.getElementById("txt-bug-feeder") as HTMLInputElement

document.getElementById("auto-complete")!.addEventListener("change", (e) => {
	const checked = (e.target as HTMLInputElement).checked
	autoCompleteEnabled(checked)
	chrome.storage.local.set({ "auto-complete": checked })
	chrome.runtime.sendMessage({ type: "auto-complete", checked })
})

document.getElementById("suggestions")!.addEventListener("change", (e) => {
	const checked = (e.target as HTMLInputElement).checked
	otherFeatureEnabled(checked || bugFeeder.checked)
	chrome.storage.local.set({ suggestions: checked })
	chrome.runtime.sendMessage({ type: "suggestions", checked })
})

document.getElementById("bug-feeder")!.addEventListener("change", (e) => {
	const checked = (e.target as HTMLInputElement).checked
	otherFeatureEnabled(checked || suggestions.checked)
	chrome.storage.local.set({ "bug-feeder": checked })
	chrome.runtime.sendMessage({ type: "bug-feeder", checked })
})

function autoCompleteEnabled(value: boolean) {
	if (value) {
		suggestions.disabled = true
		txtSuggestions.style.opacity = "0.5"
		txtSuggestions.style.textDecoration = "line-through"

		bugFeeder.disabled = true
		txtBugFeeder.style.opacity = "0.5"
		txtBugFeeder.style.textDecoration = "line-through"
	} else {
		suggestions.disabled = false
		txtSuggestions.style.opacity = "1"
		txtSuggestions.style.textDecoration = "none"

		bugFeeder.disabled = false
		txtBugFeeder.style.opacity = "1"
		txtBugFeeder.style.textDecoration = "none"
	}
}

function otherFeatureEnabled(value: boolean) {
	if (value) {
		autoComplete.disabled = true
		txtAutoComplete.style.opacity = "0.5"
		txtAutoComplete.style.textDecoration = "line-through"
	} else {
		autoComplete.disabled = false
		txtAutoComplete.style.opacity = "1"
		txtAutoComplete.style.textDecoration = "none"
	}
}

chrome.storage.local.get(["auto-complete", "suggestions", "bug-feeder"], (result) => {
	autoComplete.checked = result["auto-complete"]
	suggestions.checked = result["suggestions"]
	bugFeeder.checked = result["bug-feeder"]

	autoCompleteEnabled(autoComplete.checked)
	otherFeatureEnabled(suggestions.checked || bugFeeder.checked)
	Object.keys(result).forEach((key) => {
		if (result[key]) {
			chrome.runtime.sendMessage({ type: key, checked: true })
		}
	})
})

function addErrorToast(text: string) {
	const toast = document.getElementById("toast")!
	toast.classList.remove("hidden")
	setTimeout(() => {
		toast.classList.remove("opacity-0")
		toast.classList.add("opacity-100")
	}, 100)
	toast.innerText = text
	setTimeout(() => {
		toast.classList.remove("opacity-100")
		toast.classList.add("opacity-0")
		setTimeout(() => {
			toast.classList.add("hidden")
		}, 500)
	}, 5000)
}

chrome.runtime.onMessage.addListener(function (request) {
	if (request.error) {
		setTimeout(() => {
			addErrorToast(request.error)
			switch (request.type) {
				case "auto-complete":
					autoComplete.checked = false
					autoCompleteEnabled(false)
					chrome.storage.local.set({ "auto-complete": request.checked })
					break
				case "suggestions":
					suggestions.checked = false
					otherFeatureEnabled(false)
					break
				case "bug-feeder":
					bugFeeder.checked = false
					otherFeatureEnabled(false)
					break
				default:
					break
			}
		}, 500)
	}
})
