import { appendPassword } from "./helper";
import { rule11 } from "./rules";

console.log("Hello from content script")
chrome.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
) {
    // console.log(request.url)
    // if (request.url.includes("captchas")) {
    //     rule10(request.url);
    // }
    // if (request.url.includes("chess")) {
    //     rule16(request.url.split("chess/puzzle")[1].replace(".svg", ""));
    // }
});

let passwdBox = document.querySelector(".ProseMirror");
let passwd = passwdBox!.textContent;
let rulesState: Record<string, boolean> = {}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target === passwdBox && mutation.type === "childList" || mutation.type === "characterData") {
            passwd = passwdBox!.textContent;
            console.log("->",passwd)
        }
    });
});

observer.observe(passwdBox!, { childList: true, subtree: true, characterData: true });

window.onload = () => {
    setInterval(async () => {
        let currentDisplayedRules = document.querySelectorAll(".rule-icon") as NodeListOf<HTMLImageElement>;
        // if (!currentDisplayedRules.length) {
            let word = await rule11();
            appendPassword(passwd!, word);
            passwd = passwdBox!.textContent;
            // return;
        // }

        currentDisplayedRules.forEach((rule) => {
            let ruleNumber = rule.parentElement!.innerText!.split(" ")[2];
            if (rule.src.includes("error")) {
                rulesState[ruleNumber] = false;
            }
        });
        // console.log(rulesState)

    }, 2000);
};