import { DateTime } from "luxon"
import { chessSolution, geoLocations, periodicTable, youtubeLinks } from "./constants"
import {
	appendPassword,
	containsPeriodicSymbol,
	containsRomanNumeral,
	convertTimeFormat,
	getPassword,
	getPasswordText,
} from "./utils"
import suncalc from "suncalc"

// RULE - 4
export const getSpecialCharacter = () => {
	const specialChar = ["@", "!", "$", "_", "&", "*", "?", "%"]
	const randomIndex = Math.floor(Math.random() * specialChar.length)
	return specialChar[randomIndex]
}

// RULE - 5
export const getNumberSumOf25 = () => {
	const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const numbers = []
	let sum = 0

	while (sum !== 25) {
		const randomIndex = Math.floor(Math.random() * num.length)
		const randomNum = num[randomIndex]
		if (sum + randomNum <= 25) {
			sum += randomNum
			numbers.push(randomNum)
		} else {
			continue
		}
	}
	return numbers
}

// RULE - 6
export const getMonth = () => {
	const months = [
		"january",
		"february",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december",
	]
	const randomMonth = months[Math.floor(Math.random() * months.length)]
	return randomMonth
}

// RULE - 7
export const getRomanNumeral = () => {
	const romanNumeral = [
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
		"L",
		"C",
		"D",
		"M",
	]
	const randomIndex = Math.floor(Math.random() * romanNumeral.length)
	return romanNumeral[randomIndex]
}

// RULE - 8
export const getSponsor = () => {
	const sponsors = ["shell", "pepsi", "starbucks"]
	const randomIndex = Math.floor(Math.random() * sponsors.length)
	return sponsors[randomIndex]
}

// RULE - 9
export const getRomanNumeralMultipleOf35 = () => {
	const roman = ["XXXV", "XVII"]
	const randomIndex = Math.floor(Math.random() * roman.length)
	return roman[randomIndex]
}

// RULE - 10
export const getCaptcha = () => {
	const captchaElement = document.querySelector(".captcha-img") as HTMLImageElement
	const captcha = captchaElement.src.split("captchas/")[1].split(".")[0]
	return captcha
}

// Rule - 11
export const getWordle = async () => {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, "0")
	const day = String(today.getDate()).padStart(2, "0")
	const formattedDate = `${year}-${month}-${day}`
	const response = await fetch("https://neal.fun/api/password-game/wordle?date=" + formattedDate)
	const data = await response.json()
	return data.answer
}

// Rule - 12
export const getPeriodicSymbol = () => {
	let randomIndex = Math.floor(Math.random() * periodicTable.length)
	let twoLetterSymbol = periodicTable[randomIndex]

	while (containsRomanNumeral(twoLetterSymbol) || twoLetterSymbol.length < 2) {
		randomIndex = Math.floor(Math.random() * periodicTable.length)
		twoLetterSymbol = periodicTable[randomIndex]
	}
	return twoLetterSymbol
}

// Rule - 13
export const getMoonPhaseEmoji = () => {
	const m = DateTime.now().setZone("America/New_York").startOf("day").toJSDate()
	const h = DateTime.now().setZone("America/New_York").startOf("day").plus({ days: 1 }).toJSDate()

	let t = suncalc.getMoonIllumination(m).phase
	let r = suncalc.getMoonIllumination(h).phase
	let moonEmojiList = []
	if (t <= 0.25 && r >= 0.25) {
		moonEmojiList = ["🌓", "🌗", "🌛", "🌜"]
	} else if (t <= 0.5 && r >= 0.5) {
		moonEmojiList = ["🌕", "🌝"]
	} else if (t <= 0.75 && r >= 0.75) {
		moonEmojiList = ["🌓", "🌗", "🌛", "🌜"]
	} else if (t >= r) {
		moonEmojiList = ["🌑", "🌚"]
	} else if (t <= 0.25) {
		moonEmojiList = ["🌒", "🌘"]
	} else if (t <= 0.5 || t <= 0.75) {
		moonEmojiList = ["🌔", "🌖"]
	} else {
		moonEmojiList = ["🌒", "🌘"]
	}
	return moonEmojiList[Math.floor(Math.random() * moonEmojiList.length)]
}

// Rule - 14
export const getGeoLocation = () => {
	const element = document.querySelector(".geo-wrapper")!.firstChild! as HTMLImageElement
	if (!element) {
		getGeoLocation()
		return
	}
	const url = element.src
	const embedLinks = geoLocations.flatMap((e) => e.embed)
	const links = geoLocations.flatMap((e) => e.link)
	const countries = geoLocations.flatMap((e) => e.title)

	if (embedLinks.includes(url) || links.includes(url)) {
		let index = embedLinks.indexOf(url) || links.indexOf(url)
		let title = countries[index]
		return title.trim().replace(" ", "").toLowerCase()
	}
}

// Rule - 15
export const getALeapYear = () => {
	const leapYears = []
	for (let year = 2000; year <= 2100; year++) {
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			leapYears.push(year)
		}
	}
	const randomIndex = Math.floor(Math.random() * leapYears.length)
	return leapYears[randomIndex]
}

// Rule - 16
export const getChessSolution = () => {
	const element = document.querySelector(".chess-img") as HTMLImageElement
	const url = element.src
	const index = url.split("chess/puzzle")[1].replace(".svg", "")
	const solution = chessSolution[parseInt(index)]
	if (containsPeriodicSymbol(solution)) {
		window.location.reload()
	}
	return solution
}

// Rule - 22
export const getAffirmation = () => {
	const affirmations = ["iamloved", "iamworthy", "iamenough"]
	const randomIndex = Math.floor(Math.random() * affirmations.length)
	return affirmations[randomIndex]
}

// Rule 23
export const autoBugFeeder = () => {
	const feederId = setInterval(() => {
		const curr = getPassword()
		const bugs = curr.match(/🐛/g)?.length || 0
		if (bugs < 6) {
			appendPassword(curr, "🐛")
		}
	}, 1000)
	return feederId;
}

// Rule - 24
export const getYTLink = () => {
	const textDuration = document.querySelector(".rule-desc")!.textContent!
	const duration = textDuration.includes("exactly")
		? textDuration.split("exactly ")[1].split(" long")[0]
		: textDuration.split(" a ")[1].split(" long")[0]
	const time_str = convertTimeFormat(duration)
	const link = youtubeLinks[time_str]
	if (!link) {
		return "Couldnt find a link for this duration"
	} else {
		return "https://youtu.be/" + link
	}
}

// Rule - 25
export const getSacrificialLetters = () => {
	const passwd = getPasswordText()
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let notInPasswd: string[] = []
	for (let i of characters) {
		if (!passwd!.includes(i) && !passwd!.includes(i.toLowerCase())) {
			notInPasswd.push(i)
		}
	}
	return notInPasswd
}

// Rule - 28
export const getHexCode = () => {
	let color = document.querySelector(".rand-color")! as HTMLElement
	const rgb = color.style.background.replace(/rgb\(|\)/g, "")
	const rgbValues = rgb.split(",")
	const hexValues = rgbValues.map((value) => {
		const intValue = parseInt(value)
		const hex = intValue.toString(16).padStart(2, "0") // Ensure two digits
		return hex
	})
	const hexCode = "#" + hexValues.join("")
	return hexCode
}

// Rule - 35
export const getCurrentTime = () => {
	const now = new Date()
		.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: !0 })
		.split(" ")[0]
	return now
}

// final paste
export const copyPaste = () => {
	const passwdBoxes = document.querySelectorAll(".ProseMirror")
	passwdBoxes[1].innerHTML = passwdBoxes[0].innerHTML
}
