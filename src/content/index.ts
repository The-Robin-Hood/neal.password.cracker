import { appendPassword, calcTimer, changeWidth, getPassword, getPasswordText, replacePassword } from "./utils"
import { rule10, rule18, rule25, rule28, rule32, rule35, rule5 } from "./rules"
import {
	autoBugFeeder,
	copyPaste,
	getAffirmation,
	getChessSolution,
	getGeoLocation,
	getMoonPhaseEmoji,
	getWordle,
	getYTLink,
} from "./helper"

let mainId: number;
let bugFeederId: number;
let timerId: number;
let onProgress: boolean = false;
let completed: boolean = false;

async function automate() {
	let rulesState: Record<string, boolean> = {}
	const leapyear = "2000@"
	const romanNumeral = "XXXV"
	const weightLifters = "🏋️‍♂️🏋️‍♂️🏋️‍♂️"
	const month = "may"
	const sponsor = "shell"
	const egg = "🥚"
	const periodicSymbol = "He"
	const wordle = await getWordle()
	const getTime = rule35()
	const bugs = "🐛🐛🐛🐛🐛🐛🐛🐛"
	const moonEmoji = getMoonPhaseEmoji()
	const selfWords = getAffirmation()

	if (getPasswordText()?.length! > 1) {
		window.location.reload()
	}
	onProgress = true;
	changeWidth()
	timerId = calcTimer();
	appendPassword(
		getPassword(),
		periodicSymbol +
		getTime +
		romanNumeral +
		leapyear +
		wordle +
		weightLifters +
		egg +
		bugs +
		month +
		sponsor +
		moonEmoji +
		selfWords
	)

	bugFeederId = autoBugFeeder();

	let ytLinkAdded = false
	let colorSelected = false
	let sacrificeBtnClicked = false
	let startTime = new Date().getTime()

	mainId = setInterval(async () => {
		let currentDisplayedRules = document.querySelectorAll(
			".rule-icon"
		) as NodeListOf<HTMLImageElement>

		currentDisplayedRules.forEach((rule) => {
			let ruleNumber = rule.parentElement!.innerText!.split(" ")[2]
			if (rule.src.includes("error")) {
				rulesState[ruleNumber] = false
			} else {
				rulesState[ruleNumber] = true
			}
		})

		for (let i in rulesState) {
			if (!rulesState[i]) {
				switch (i) {
					case "5":
						rule5()
						break
					case "10":
						rule10()
						break
					case "14":
						const geoLocator = getGeoLocation()
						if (geoLocator) {
							appendPassword(getPassword(), geoLocator)
						} else {
							window.location.reload()
						}
						break
					case "16":
						appendPassword(getPassword(), getChessSolution())
						break
					case "18":
						rule18()
						break
					case "20":
						replacePassword("🔥", "")
						break
					case "24":
						if (ytLinkAdded) break
						const link = getYTLink()
						if (link) {
							appendPassword(getPassword(), link)
							ytLinkAdded = true
						} else {
							window.location.reload()
						}
						break
					case "25":
						if (sacrificeBtnClicked) break
						sacrificeBtnClicked = true
						rule25()
						setTimeout(() => {
							const sacrificeBtn = document.querySelector(".sacrafice-btn") as HTMLButtonElement
							sacrificeBtn.click()
						}, 1000)
						break
					case "27" || "33" || "35":
						appendPassword(getPassword(), "-")
						break
					case "28":
						if (colorSelected) break
						colorSelected = true
						const hex = await rule28()
						appendPassword(getPassword(), hex)
						break
					case "31":
						appendPassword(getPassword(), getPasswordText()!, true)
						break
					case "32":
						rule32()
						break
				}
			}
		}

		const finalPasswd = document.querySelector(".final-password")
		if (finalPasswd) {
			clearInterval(mainId)
			clearInterval(bugFeederId)
			const btn = finalPasswd.firstChild as HTMLButtonElement
			btn.click()
			setTimeout(() => {
				copyPaste()
				completed = true;
				clearInterval(timerId);
				let endTime = new Date().getTime() - startTime
				console.log("Execution time: " + endTime / 1000 + "s")
			}, 1000)
		}
	}, 500)
	return mainId;
}


chrome.runtime.onMessage.addListener(function (request) {
	if (request.type === "auto-complete") {
		if (request.checked && !completed && !onProgress) {
			automate()
		}
		else {
			if (mainId) {
				onProgress = false;
				clearInterval(mainId)
			}
			if (bugFeederId) {
				clearInterval(bugFeederId);
			}
			if (timerId) {
				clearInterval(timerId);
			}
		}
	}
})


chrome.storage.local.get(["auto-complete"], (result) => {
	if (result["auto-complete"] && !onProgress && !completed) {
		automate()
	}
})