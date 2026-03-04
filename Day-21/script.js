"use strict";


// SAFE STORAGE OBJECT

let storage = {};


// SAVE FUNCTION

function saveSettings(data){

storage = data;

}



// LOAD FUNCTION

function loadSettings(){

return storage.theme ? storage : {

theme: "light",
fontSize: "20",
language: "en"

};

}



// RESET

function resetSettings(){

storage = {

theme: "light",
fontSize: "20",
language: "en"

};

applyAll();

}




// TEXT DATA

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




// ELEMENTS

const toggle = document.getElementById("themeToggle");

const font = document.getElementById("fontSize");

const lang = document.getElementById("language");

const resetBtn = document.getElementById("resetBtn");



// SETTINGS

let settings = loadSettings();




// APPLY ALL

applyAll();




// EVENTS


toggle.addEventListener("change", () => {

settings.theme = toggle.checked ? "dark" : "light";

saveSettings(settings);

applyAll();

});



font.addEventListener("change", () => {

settings.fontSize = font.value;

saveSettings(settings);

applyAll();

});



lang.addEventListener("change", () => {

settings.language = lang.value;

saveSettings(settings);

applyAll();

});



resetBtn.addEventListener("click", resetSettings);




// APPLY FUNCTION

function applyAll(){

document.body.className = settings.theme;

document.body.style.fontSize = settings.fontSize + "px";


toggle.checked = settings.theme === "dark";

font.value = settings.fontSize;

lang.value = settings.language;


// language text

document.getElementById("title").innerText =
text[settings.language].title;

document.getElementById("themeText").innerText =
text[settings.language].theme;

document.getElementById("fontText").innerText =
text[settings.language].font;

document.getElementById("langText").innerText =
text[settings.language].lang;

document.getElementById("resetBtn").innerText =
text[settings.language].reset;

}