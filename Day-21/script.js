"use strict";

import { saveSettings, loadSettings, resetSettings } from "./settings.js";


const toggle = document.getElementById("themeToggle");
const font = document.getElementById("fontSize");
const lang = document.getElementById("language");
const reset = document.getElementById("resetBtn");


// Text Data

const text = {

en: {

title: "⚙️ Settings Dashboard",
theme: "🌙 Dark Mode",
font: "🔠 Font Size",
lang: "🌐 Language",
reset: "Reset Settings"

},

hi: {

title: "⚙️ सेटिंग्स डैशबोर्ड",
theme: "🌙 डार्क मोड",
font: "🔠 फ़ॉन्ट आकार",
lang: "🌐 भाषा",
reset: "रीसेट सेटिंग्स"

},

te: {

title: "⚙️ సెట్టింగ్స్ డాష్‌బోర్డ్",
theme: "🌙 డార్క్ మోడ్",
font: "🔠 ఫాంట్ పరిమాణం",
lang: "🌐 భాష",
reset: "రీసెట్ సెట్టింగ్స్"

}

};



// Load Settings

let settings = loadSettings();



// Apply All

applyTheme(settings.theme);
applyFont(settings.fontSize);
applyLanguage(settings.language);



// Sync UI

toggle.checked = settings.theme === "dark";
font.value = settings.fontSize;
lang.value = settings.language;



// Theme Change

toggle.addEventListener("change", () => {

settings.theme = toggle.checked ? "dark" : "light";

applyTheme(settings.theme);

saveSettings(settings);

});



// Font Change

font.addEventListener("change", () => {

settings.fontSize = font.value;

applyFont(settings.fontSize);

saveSettings(settings);

});



// Language Change

lang.addEventListener("change", () => {

settings.language = lang.value;

applyLanguage(settings.language);

saveSettings(settings);

});



// Reset

reset.addEventListener("click", () => {

resetSettings();

location.reload();

});




// Functions


function applyTheme(theme){

document.body.className = theme;

}



function applyFont(size){

document.body.style.fontSize = size + "px";

}



function applyLanguage(language){

document.getElementById("title").innerText = text[language].title;

document.getElementById("themeText").innerText = text[language].theme;

document.getElementById("fontText").innerText = text[language].font;

document.getElementById("langText").innerText = text[language].lang;

document.getElementById("resetBtn").innerText = text[language].reset;

}

"use strict";

const KEY = "dashboardSettings";


export function saveSettings(data){

localStorage.setItem(KEY, JSON.stringify(data));

}


export function loadSettings(){

const data = localStorage.getItem(KEY);

return data ? JSON.parse(data) :

{

theme: "light",
fontSize: "16",
language: "en"

};

}


export function resetSettings(){

localStorage.removeItem(KEY);

}