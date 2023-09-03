import { appendPassword, getPassword, getPasswordText, replacePassword } from "./utils"
import { rule10, rule18, rule23, rule25, rule28, rule32, rule35, rule5 } from "./rules"
import {
	copyPaste,
	getAffirmation,
	getChessSolution,
	getGeoLocation,
	getMoonPhaseEmoji,
	getWordle,
	getYTLink,
} from "./helper"

// declare a global variable
declare global {
	interface Window {
		hold: boolean
		automation: boolean
	}
}

let passwdBox = document.querySelector(".ProseMirror")
let passwd = passwdBox!.textContent
let rulesState: Record<string, boolean> = {}

window.hold = false

window.onload = async () => {
	// default things to be done at first

	;(document.querySelector(".password-wrapper")! as HTMLElement).style.minWidth =
		"calc(90% - 100px)"
	const leapyear = "2000@"
	const romanNumeral = "XXXV"
	const weightLifters = "🏋️‍♂️🏋️‍♂️🏋️‍♂️"
	const month = "may"
	const sponsor = "shell"
	const egg = "🥚"
	const periodicSymbol = "He"
	const wordle = await getWordle()
	const getTime = rule35()
	const bugs = rule23()
	const moonEmoji = getMoonPhaseEmoji()
	const selfWords = getAffirmation()
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

	let ytLinkAdded = false
	let colorSelected = false
	let startTime = new Date().getTime()

	const timerrr = setInterval(async () => {
		if (window.hold) return
		passwd = passwdBox!.textContent
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
						rule25()
						window.hold = true
						setTimeout(() => {
							const sacrificeBtn = document.querySelector(".sacrafice-btn") as HTMLButtonElement
							sacrificeBtn.click()
							window.hold = false
						}, 1000)
						break
					case "27" || "33":
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
			clearInterval(timerrr)
			const btn = finalPasswd.firstChild as HTMLButtonElement
			btn.click()
			setTimeout(() => {
				copyPaste()
				let endTime = new Date().getTime() - startTime
				console.log("Execution time: " + endTime)
			}, 1000)
		}
	}, 500)
}
