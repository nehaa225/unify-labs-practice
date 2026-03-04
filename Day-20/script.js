const apiKey = "0f77e2aaa58c7c94ca0e9272cb1601a3";

const spinner = document.getElementById("spinner");

const weatherBox = document.getElementById("weatherBox");

const toggleBtn = document.getElementById("toggleMode");

let currentCity = "";


// Dark Mode Toggle

toggleBtn.onclick = () => {

document.body.classList.toggle("dark");

};


// Get Weather

async function getWeather(){

const city = document.getElementById("cityInput").value;

if(!city) return;

currentCity = city;

spinner.classList.remove("hidden");

weatherBox.innerHTML="Loading...";

try{

const res = await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

);

if(!res.ok) throw new Error("City not found");

const data = await res.json();

showWeather(data);

changeBackground(data.weather[0].main);

}
catch(err){

weatherBox.innerHTML = `<h2>${err.message}</h2>`;

}
finally{

spinner.classList.add("hidden");

}

}



// Show Weather

function showWeather(data){

weatherBox.innerHTML =

`

<div class="card">

<h2>${data.name}</h2>

<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

<h3>🌡️ ${data.main.temp} °C</h3>

<p>🌥️ ${data.weather[0].main}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

</div>

`;

}



// Change Background

function changeBackground(weather){

if(weather=="Clear")

document.body.style.background="linear-gradient(to right,#f7971e,#ffd200)";

else if(weather=="Clouds")

document.body.style.background="linear-gradient(to right,#757f9a,#d7dde8)";

else if(weather=="Rain")

document.body.style.background="linear-gradient(to right,#314755,#26a0da)";

else

document.body.style.background="linear-gradient(to right,#4facfe,#00f2fe)";

}



// Auto Refresh every 30 seconds

setInterval(()=>{

if(currentCity){

getWeather();

}

},30000);
