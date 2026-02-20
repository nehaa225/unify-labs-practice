// SAFE STORAGE (works even if localStorage blocked)

let safeStorage;

try {

safeStorage = localStorage;

}
catch {

safeStorage = {

data:{},

setItem(key,value){

this.data[key]=value;

},

getItem(key){

return this.data[key] || null;

}

};

}


// API

const API="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1";


let data=[];

let favorites=
JSON.parse(safeStorage.getItem("fav")) || [];



async function loadData(){

try{

const res=await fetch(API);

data=await res.json();

showCoins(data);

showFavorites();

}
catch{

alert("API Error");

}

loader.style.display="none";

}



function showCoins(list){

coins.innerHTML="";

list.forEach(c=>{

coins.innerHTML+=`

<div class="card">

<img src="${c.image}" width="40">

<h3>${c.name}</h3>

<p>$${c.current_price}</p>

<button onclick="toggleFav('${c.id}')">

${favorites.includes(c.id)
?"Remove":"Favorite"}

</button>

</div>

`;

});

}



function showFavorites(){

const favList=
data.filter(c=>favorites.includes(c.id));

favoritesDiv.innerHTML="";

favList.forEach(c=>{

favoritesDiv.innerHTML+=`

<div class="card">

<h3>${c.name}</h3>

<p>$${c.current_price}</p>

</div>

`;

});

}



function toggleFav(id){

if(favorites.includes(id))

favorites=favorites.filter(f=>f!=id);

else

favorites.push(id);


safeStorage.setItem("fav",
JSON.stringify(favorites));


showCoins(data);

showFavorites();

}



search.oninput=function(){

let text=this.value.toLowerCase();

let filtered=data.filter(c=>
c.name.toLowerCase().includes(text));

showCoins(filtered);

};



sort.onchange=function(){

let sorted=[...data];

if(this.value=="price")

sorted.sort((a,b)=>
b.current_price-a.current_price);

if(this.value=="name")

sorted.sort((a,b)=>
a.name.localeCompare(b.name));

showCoins(sorted);

};



themeBtn.onclick=function(){

document.body.classList.toggle("dark");

};



const coins=document.getElementById("coins");

const favoritesDiv=document.getElementById("favorites");

const loader=document.getElementById("loader");


loadData();