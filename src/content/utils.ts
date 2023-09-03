import { periodicTable, fonts } from "./constants"

let previousPassword = ""
let entirePassword: Record<string, string[]> = {}

function containsRomanNumeral(str: string) {
	return /[IVXLCDM]/.test(str)
}

function containsPeriodicSymbol(str: string) {
	for (let i of periodicTable) {
		if (str.includes(i) && i !== "") {
			return true
		}
	}
	return false
}

function contains(str: string, lst: string[]) {
	for (let i of lst) {
		if (i && str.includes(i)) {
			return true
		}
	}
	return false
}

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

function convertTimeFormat(input: string) {
	const parts = input.split(" ")
	let minutes = "00"
	let seconds = "00"

	for (let i = 0; i < parts.length; i++) {
		if (parts[i] === "minute") {
			minutes = parts[i - 1]
		} else if (parts[i] === "second") {
			seconds = parts[i - 1]
		}
	}

	return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`
}

function setPassword(passwd: string) {
	passwd = passwd.replaceAll("<p>", "").replaceAll("</p>", "")
	const passwdBox = document.querySelector(".ProseMirror")
	passwdBox!.innerHTML = "<p>" + passwd + "</p>"
}

function getPassword() {
	return document.querySelector(".ProseMirror")!.innerHTML
}

function getPasswordText() {
	const passwdBox = document.querySelector(".ProseMirror")
	const passwd = passwdBox!.textContent
	return passwd
}

function appendPassword(existingPasswd: string, passwd: string, replace = false) {
	previousPassword = existingPasswd
	if (existingPasswd.includes("ProseMirror-trailingBreak")) {
		existingPasswd = ""
	}
	let newPassword = ""
	let fontWeight = "italic"
	let fontFace = "Monospace"
	let fontSize = "28"
	const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
	if (containsRomanNumeral(passwd)) {
		fontFace = "Times New Roman"
	}
	if (replace) {
		entirePassword = {}
	}
	for (let i of passwd) {
		if (i === "-") {
			newPassword += `<span style="font-family: Wingdings;">-</span>`
			continue
		}
		if (!["🐛", "🔥", "🏋"].includes(i)) {
			if (i && /^-?\d+$/.test(i)) {
				fontSize = (Number(i) ** 2).toString()
			} else if (entirePassword[i.toLowerCase()]) {
				let newFontSize = fontSize
				for (let z of fonts) {
					if (!entirePassword[i.toLowerCase()].includes(z)) {
						newFontSize = z
					}
				}
				fontSize = newFontSize
				entirePassword[i.toLowerCase()].push(newFontSize)
			}
			if (!entirePassword[i.toLowerCase()]) {
				entirePassword[i.toLowerCase()] = [fontSize]
			}
		} else {
			fontSize = "28"
		}

		if (vowels.includes(i)) {
			fontWeight = "bold"
		} else {
			fontWeight = "italic"
		}
		newPassword += `<span style="font-family: ${fontFace}; font-size: ${fontSize}px;">${
			fontWeight === "bold" ? "<strong>" : "<em>"
		}${i}${fontWeight === "bold" ? "</strong>" : "</em>"}</span>`
	}
	if (!replace && passwd !== "🐛") {
		newPassword += `<span style="font-family: Wingdings;">-----</span>`
	}
	if (replace) {
		setPassword(newPassword)
	} else {
		setPassword(existingPasswd + newPassword)
	}
}

function replacePassword(replace: string, replaceWith: string) {
	const passwdBox = document.querySelector(".ProseMirror")
	const passwd = passwdBox!.innerHTML
	if (replace === "🔥") {
		passwdBox!.innerHTML = previousPassword
	} else if (replace === "-") {
		previousPassword = passwd
		let lastIndex = passwdBox!.textContent!.lastIndexOf("-")
		let newPasswd =
			passwdBox!.textContent!.slice(0, lastIndex) +
			"" +
			passwdBox!.textContent!.slice(lastIndex + 1)
		appendPassword(passwd, newPasswd, true)
	} else {
		previousPassword = passwd
		const newPasswd = passwdBox!.textContent!.replace(replace, replaceWith)
		appendPassword(passwd, newPasswd, true)
	}
}

function subtractAndSplit(arr: any[], target: number) {
	const sum = arr.reduce((acc, curr) => Number(acc) + Number(curr), 0)
	let result = sum - target
	if (sum <= target) {
		return []
	}
	if (result > 9) {
		const resultArray = []
		while (result > 0) {
			if (result >= 9) {
				resultArray.push(9)
				result -= 9
			} else {
				resultArray.push(result)
				result = 0
			}
		}
		return resultArray
	} else {
		return [result]
	}
}

export {
	getPassword,
	getPasswordText,
	appendPassword,
	replacePassword,
	subtractAndSplit,
	convertTimeFormat,
	contains,
	containsPeriodicSymbol,
	containsRomanNumeral,
	sleep,
}
