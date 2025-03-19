'use strict';

let btn = document.querySelector("button")
let select = document.querySelector("select")
let text = document.querySelector("textarea")


btn.addEventListener("click", () => {
    let sound = new SpeechSynthesisUtterance()
    sound.text = text.value
    sound.lang = select.value
    sound.rate = 0.9
    window.speechSynthesis.speak(sound)
})
