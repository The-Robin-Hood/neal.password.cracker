import {
	appendPassword,
	calcTimer,
	changeWidth,
	containsPeriodicSymbol,
	getPassword,
	getPasswordText,
	isTimeGreaterThan10,
	nextTimeToSolve,
	replacePassword,
} from "./utils"
import { rule10, rule18, rule25, rule28, rule32, rule35, rule5 } from "./rules"
import {
	autoBugFeeder,
	copyPaste,
	getALeapYear,
	getAffirmation,
	getCaptcha,
	getChessSolution,
	getCurrentTime,
	getGeoLocation,
	getHexCode,
	getMonth,
	getMoonPhaseEmoji,
	getNumberSumOf25,
	getPeriodicSymbol,
	getRomanNumeral,
	getRomanNumeralMultipleOf35,
	getSacrificialLetters,
	getSpecialCharacter,
	getSponsor,
	getWordle,
	getYTLink,
} from "./helper"

let mainId: number
let bugFeederId: number
let timerId: number
let suggestionId: number
let onProgress: boolean = false
let completed: boolean = false

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

	if (isTimeGreaterThan10(getTime)) {
		const nextTime = nextTimeToSolve()
		chrome.runtime.sendMessage({
			type: "auto-complete",
			checked: false,
			error:
				"It is nearly impossible to solve due to time constraint (Rule 5 & 35 conflicts) Try again on " +
				nextTime,
		})
		return
	}
	if (getPasswordText()?.length! > 1) {
		window.location.reload()
	}
	onProgress = true
	changeWidth()
	timerId = calcTimer()
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

	bugFeederId = autoBugFeeder()

	let ytLinkAdded = false
	let colorSelected = false
	let sacrificeBtnClicked = false

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
						if (containsPeriodicSymbol(getChessSolution())) {
							window.location.reload()
						}
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
					case "27":
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
				completed = true
				clearInterval(timerId)
			}, 1000)
		}
	}, 500)
	return mainId
}

function suggestionBox(enable: boolean) {
	if (enable) {
		if (document.getElementById("suggestionBox")) return
		const suggestionBox = document.createElement("div")
		suggestionBox.id = "suggestionBox"
		suggestionBox.style.display = "flex"
		suggestionBox.style.marginBlock = "30px"
		suggestionBox.style.padding = "15px"
		suggestionBox.style.borderRadius = "10px"
		suggestionBox.style.textAlign = "center"
		suggestionBox.style.justifyContent = "center"
		suggestionBox.style.fontWeight = "bold"
		suggestionBox.style.backgroundColor = "rgb(32 46 70)"
		suggestionBox.style.color = "white"
		suggestionBox.innerText = "Suggestions will appear here"
		document.querySelector(".password-label")!.insertAdjacentElement("afterend", suggestionBox)
		suggestionOn()
	} else {
		const suggestionBox = document.getElementById("suggestionBox")
		if (suggestionBox) {
			suggestionBox.remove()
		}
		clearInterval(suggestionId)
	}
}

function suggestionBoxText(text: string) {
	const suggestionBox = document.getElementById("suggestionBox")!
	suggestionBox.innerText = text
}

function suggestionOn() {
	suggestionId = setInterval(async () => {
		const rules = document.querySelector(".rule-top")!
		if (rules) {
			const currentRule = rules.textContent!.replaceAll("\n", "").replaceAll(" ", "")
			switch (currentRule) {
				case "Rule1":
					suggestionBoxText("Suggestion : batman")
					break
				case "Rule2":
					suggestionBoxText("0 is recommended")
					break
				case "Rule3":
					suggestionBoxText(
						"Capitalize a letter that should not be a roman numeral or a periodic symbol"
					)
					break
				case "Rule4":
					suggestionBoxText(getSpecialCharacter())
					break
				case "Rule5":
					suggestionBoxText(`${getNumberSumOf25()}`)
					break
				case "Rule6":
					suggestionBoxText(getMonth())
					break
				case "Rule7":
					suggestionBoxText(getRomanNumeral())
					break
				case "Rule8":
					suggestionBoxText(getSponsor())
					break
				case "Rule9":
					suggestionBoxText(getRomanNumeralMultipleOf35())
					break
				case "Rule10":
					suggestionBoxText("Captcha Text : " + getCaptcha())
					break
				case "Rule11":
					const wordle = await getWordle()
					suggestionBoxText(`Today's Wordle : ${wordle}`)
					break
				case "Rule12":
					suggestionBoxText(`Periodic Symbol : ${getPeriodicSymbol()}`)
					break
				case "Rule13":
					suggestionBoxText(`Moon Phase : ${getMoonPhaseEmoji()}`)
					break
				case "Rule14":
					suggestionBoxText(`Location : ${getGeoLocation()}`)
					break
				case "Rule15":
					suggestionBoxText(`Leap Year : ${getALeapYear()}`)
					break
				case "Rule16":
					suggestionBoxText(`Chess Solution : ${getChessSolution()}`)
					break
				case "Rule17":
					suggestionBoxText(`Place the 🥚 at front of the text`)
					break
				case "Rule22":
					suggestionBoxText(`Affirmation : ${getAffirmation()}`)
					break
				case "Rule23":
					suggestionBoxText(`Turn on the auto bug feeder feature`)
					break
				case "Rule24":
					suggestionBoxText(`Youtube Link : ${getYTLink()}`)
					break
				case "Rule25":
					const letters = getSacrificialLetters()
					if (letters.length > 2) {
						suggestionBoxText(`Sacrificial Letters : ${letters}`)
					} else {
						suggestionBoxText("Not enough letters to sacrifice, try modifying the password")
					}
					break
				case "Rule26":
					suggestionBoxText(`Make all the characters to italic`)
					break
				case "Rule27":
					suggestionBoxText(`Make ${getPasswordText()?.length! % 30} characters to Wingdings`)
					break
				case "Rule28":
					suggestionBoxText(`Hex value : ${getHexCode()}`)
					break
				case "Rule32":
					suggestionBoxText(`Password Length : ${getPasswordText()?.length!}`)
					break
				case "Rule35":
					suggestionBoxText(
						`Current Time : ${getCurrentTime()}, Please copy the password after entering the time`
					)
					break
				default:
					suggestionBoxText(".....")
					break
			}
		}
	}, 1000)
}

chrome.runtime.onMessage.addListener(function (request) {
	if (request.type === "auto-complete") {
		if (request.checked && !completed && !onProgress) {
			automate()
		} else {
			onProgress = false
			clearInterval(mainId)
			clearInterval(bugFeederId)
			clearInterval(timerId)
		}
	}
	if (request.type === "suggestions") {
		if (!onProgress && !completed) {
			suggestionBox(request.checked)
		}
	}
	if (request.type === "bug-feeder") {
		if (request.checked && !onProgress) {
			bugFeederId = autoBugFeeder()
		} else {
			clearInterval(bugFeederId)
		}
	}
})

chrome.storage.local.get(["auto-complete"], (result) => {
	if (result["auto-complete"] && !onProgress && !completed) {
		automate()
	}
})
