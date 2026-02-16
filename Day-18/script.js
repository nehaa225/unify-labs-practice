
// LESSON 7: ES6 CLASS

class Pet{

// Constructor Function (Lesson 6)

constructor(name,type){

this.name = name;
this.type = type;
this._health = 50; // default

// Freeze name and type (Lesson 4)
Object.defineProperty(this,"name",{writable:false});
Object.defineProperty(this,"type",{writable:false});

}


// Getter (Lesson 8)

get health(){

return this._health;

}


// Setter with Protection

set health(value){

if(value > 100){

this._health = 100;

}

else if(value < 0){

this._health = 0;

}

else{

this._health = value;

}

}



// Method: Feed

feed(){

this.health += 10;

return this.name + " is eating 🍖";

}


// Method: Play

play(){

this.health -= 10;

return this.name + " is playing 🎾";

}


// Method: Status

getStatus(){

return `
Name: ${this.name}
Type: ${this.type}
Health: ${this.health}
`;

}

}



// Object Creation

let myPet;


// Create Pet

function createPet(){

let name = document.getElementById("name").value;

let type = document.getElementById("type").value;


myPet = new Pet(name,type);


// Freeze object (Lesson 4)
Object.seal(myPet);

document.getElementById("output").innerText =
"Pet Created Successfully";

}



// Feed Pet

function feedPet(){

document.getElementById("output").innerText =
myPet.feed();

}



// Play Pet

function playPet(){

document.getElementById("output").innerText =
myPet.play();

}



// Show Status

function showStatus(){

document.getElementById("output").innerText =
myPet.getStatus();




// Lesson 5: Keys Values Entries

console.log(Object.keys(myPet));

console.log(Object.values(myPet));

console.log(Object.entries(myPet));




// Lesson 9: for...in loop

for(let key in myPet){

console.log(key + ":" + myPet[key]);

}

}


