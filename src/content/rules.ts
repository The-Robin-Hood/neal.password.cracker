import { periodicTable } from "./constants"
import { getCaptcha, getCurrentTime, getHexCode, getSacrificialLetters } from "./helper"
import {
	addTime,
	appendPassword,
	contains,
	containsPeriodicSymbol,
	containsRomanNumeral,
	getPassword,
	getPasswordText,
	replacePassword,
	sleep,
	subtractAndSplit,
} from "./utils"

let previouslyAddedPeriodicSymbols: string[] = ["He"]
let lettersNotToBe: string[] = []

function rule5() {
	const exisitingPasswd = getPasswordText() as string
	const numbers = exisitingPasswd.match(/\d/g)!.map(Number)
	const currentSum = numbers.reduce((acc, num) => acc + num, 0)

	if (currentSum === 25) {
		return
	} else if (currentSum < 25) {
		let balance = 25 - currentSum
		const numbersToAdd = []
		for (let i = 9; i >= 1; i--) {
			while (balance >= i) {
				numbersToAdd.push(i)
				balance -= i
			}
		}
		appendPassword(getPassword(), numbersToAdd.join(""))
	} else {
		let extras = currentSum - 25
		const allNumbers = exisitingPasswd.split("-----")[1]
		const numbersToBe = subtractAndSplit(allNumbers.split(""), extras).join("")
		replacePassword(allNumbers, numbersToBe)
	}
}

async function rule10() {
	let captcha = getCaptcha()
	while (
		containsRomanNumeral(captcha) ||
		/[0-9]/.test(captcha) ||
		containsPeriodicSymbol(captcha)
	) {
		const captchaRefresh = document.querySelector(".captcha-refresh") as HTMLButtonElement
		captchaRefresh.click()
		await sleep(10)
		captcha = getCaptcha()
	}
	appendPassword(getPassword(), captcha)
}

function rule18() {
	const exisitingPasswd = getPasswordText()!
	let periodicTableSymbols = []
	let totalAtomicValue = 0
	for (let i = 0; i < exisitingPasswd.length; i++) {
		const singleLetterSymbol = exisitingPasswd[i]
		const doubleLetterSymbol = exisitingPasswd[i] + exisitingPasswd[i + 1]
		if (periodicTable.includes(doubleLetterSymbol)) {
			periodicTableSymbols.push(doubleLetterSymbol)
			totalAtomicValue += periodicTable.indexOf(doubleLetterSymbol)
		} else if (periodicTable.includes(singleLetterSymbol)) {
			periodicTableSymbols.push(singleLetterSymbol)
			totalAtomicValue += periodicTable.indexOf(singleLetterSymbol)
		}
	}

	let balance = 200 - totalAtomicValue
	if (balance === 0) return
	if (balance > 0) {
		let periodicSymbolsAdded = []
		while (balance > 117 || containsRomanNumeral(periodicTable[balance])) {
			periodicSymbolsAdded.push("H")
			balance -= 1
		}
		periodicSymbolsAdded.push(periodicTable[balance])
		previouslyAddedPeriodicSymbols.push(periodicSymbolsAdded.join(""))
		appendPassword(getPassword(), periodicSymbolsAdded.join(""))
	} else {
		const popped = previouslyAddedPeriodicSymbols.pop()
		if (!popped) {
			return
		}
		replacePassword(popped, "")
	}
}

function rule25() {
	let clicked = 0
	let notInPasswd = getSacrificialLetters()
	if (notInPasswd.length < 2) {
		window.location.reload()
		return false
	}
	lettersNotToBe = [
		notInPasswd[0],
		notInPasswd[1],
		notInPasswd[0].toLowerCase(),
		notInPasswd[1].toLowerCase(),
	]
	const keyboard = document.querySelector(".letters")!.childNodes
	keyboard.forEach(async (keys) => {
		const btn = keys as HTMLButtonElement
		if (btn.innerText === notInPasswd[0] || btn.innerText === notInPasswd[1]) {
			btn.click()
			clicked++
		}
	})
}

async function rule28() {
	let hexCode = getHexCode()
	while (
		containsRomanNumeral(hexCode) ||
		containsPeriodicSymbol(hexCode) ||
		contains(hexCode, lettersNotToBe) ||
		/[0-9]/.test(hexCode)
	) {
		const color = document.querySelector(".rand-color")! as HTMLElement
		const refresh = color.firstChild as HTMLElement
		refresh.click()
		await sleep(10)
		hexCode = getHexCode()
	}
	return hexCode
}

function rule32() {
	const password = Number(
		document.querySelector(".password-length.show-password-length")!.textContent
	)
	if (password < 211) {
		appendPassword(getPassword(), "-")
	} else if (password > 211) {
		replacePassword("-", "")
	} else {
		appendPassword(getPassword(), "211")
	}
}

function rule35() {
	const currTime = getCurrentTime()
	if (new Date().getSeconds() > 20) {
		return addTime(currTime, 1)
	} else {
		return currTime
	}
}

export { rule5, rule10, rule18, rule25, rule28, rule32, rule35 }
