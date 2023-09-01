import { DateTime } from 'luxon';
import suncalc from 'suncalc';

function getMoonPhaseEmoji() {
    const m = DateTime.now()
        .setZone("America/New_York")
        .startOf("day")
        .toJSDate();
    const h = DateTime.now()
        .setZone("America/New_York")
        .startOf("day")
        .plus({ days: 1 })
        .toJSDate();

    let t = suncalc.getMoonIllumination(m).phase;
    let r = suncalc.getMoonIllumination(h).phase;
    let moonEmojiList = [];
    if (t <= 0.25 && r >= 0.25) {
        moonEmojiList = ["🌓", "🌗", "🌛", "🌜"];
    } else if (t <= 0.5 && r >= 0.5) {
        moonEmojiList = ["🌕", "🌝"];
    } else if (t <= 0.75 && r >= 0.75) {
        moonEmojiList = ["🌓", "🌗", "🌛", "🌜"];
    } else if (t >= r) {
        moonEmojiList = ["🌑", "🌚"];
    } else if (t <= 0.25) {
        moonEmojiList = ["🌒", "🌘"];
    } else if (t <= 0.5 || t <= 0.75) {
        moonEmojiList = ["🌔", "🌖"];
    } else {
        moonEmojiList = ["🌒", "🌘"];
    }
    return moonEmojiList[Math.floor(Math.random() * moonEmojiList.length)];
}

function containsRomanNumeral(str: string) {
    return /[IVXLCDM]/.test(str);
}

// function contains(word: string, lst: string[]) {
//     for (let i = 0; i < word.length; i++) {
//         if (lst.includes(word[i])) {
//             return true;
//         }
//     }
//     return false;
// }


function appendPassword(existingPasswd: string, passwd: string) {
    setTimeout(() => {
        console.log("Appending password ", existingPasswd, passwd)
        let newPassword = "--------------------------";
        let fontWeight = "italic";
        let fontFace = "Monospace";
        let fontSize = 28;
        const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
        for (let i of passwd) {
            if (vowels.includes(i)) {
                fontWeight = "bold";
            }
            newPassword += `<span style="font-family: ${fontFace}; font-size: ${fontSize}px">${fontWeight === "bold" ? `<strong>` : ""
                }${fontWeight === "italic" ? `<em>` : ""}${i}${fontWeight === "bold" ? `</strong>` : ""
                }${fontWeight === "italic" ? `</em>` : ""}</span>`;
        }
        setPassword(existingPasswd + "<p>" + newPassword + "</p>");
    }, 500);
}

function setPassword(passwd: string) {
    const passwdBox = document.querySelector(".ProseMirror");
    passwdBox!.innerHTML = passwd;
}

export { getMoonPhaseEmoji, containsRomanNumeral, setPassword, appendPassword }