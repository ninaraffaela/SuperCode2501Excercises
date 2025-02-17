// ! Wiederholung

// -Datentypen
//  String, Boolean, Number


// - was benutzen wir zum debuggen?
// console.log

//  - Variablentypen
//  let (änderbar), const nicht veränderlich - FM

// - Arithmetic Operations
//  + - * / % ++ --

// - was macht die string method lenght?
// gibt mir die länge des strings

// - was macht slice?
// it slices the "text" (von,bis) oder (start here)

// - was macht includes?
// search the string for a certain sign

// - was is the difference between replace und replaceAll?
//  replace ersetzt das erste zeichen das gesucht wurde. replaceAll ersetzt alle dieser art

// - Was ist NAN?
// Not a Number (if you transform a string into a number, but the string is not a number but consists letters e.g.)



// console.log("geht");



// ! Neues Thema - EQUALITY

// - Strict Equality === (value and type) 
console.log(1 === 1);
console.log("1" === 1);
console.log(true === false);


// - loose Equality == (value)
console.log("1" == 1);
console.log(1 == 1);


// ! Inequality(!=  !==)
// - strict inequality !== (value and type)
console.log("1" !== 1); //true
console.log(1 !== 1); // false

// -  inequality != (value)
console.log("1" != 1); //false
console.log(1 != 1); //false
console.log("hello" != "hello"); // false
console.log(0 != false); // false



// ! Greater/ Less

// - Greater >
// - Less <

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(10 > 9); // true

// - Greater or equal >=  
// - Less or equal <=
console.log(5 > 5); // false
console.log(5 >= 5); // true


// !  Null and undefined

// - undefined
let undef
console.log(undef);
// undef is a variable that is undefined until here
undef = 44
console.log(undef);


// - null
let isNull = null 
console.log(isNull);
// null would be good to insert a loader animation while data is loaded, and therefore null




// ! If-Else

// - if and else - 2 options
let age = 17

if (age >= 18){
    console.log("Du bist volljährig");
} else {
    console.log("Du bist noch nicht volljährig");
}


// - else if -
let note = 8

if (note === 1) {
    console.log("Sehr gut");
}  else if (note === 2){
    console.log("Gut");
    
} else if (note === 3){
    console.log("Befriedigend");
    
} else if (note === 4){
    console.log("Ausreichend");
    
} else if (note === 5){
    console.log("Mangelhaft");
    
} else if (note === 6 ){
    console.log("Ungenügend");
}
// else when all other options fail
else{
    console.log("Kein gültiger Wert");
}



// - example Temperatur
let temperatur = 25

if (temperatur <= 25){
    console.log("Heute ist es warm");
    
} else if (temperatur < 15){
    console.log("Heute ist es kalt");
    
} else {
    console.log("Das Wetter ist spitze");
}



// - Email Validiation
let email = "marzio@super-code.de"

if (email.includes("@") && email.endsWith(".de") || email.endsWith(".com")) {
    console.log("E-Mail is valid");
}

else {
    console.log("E-Mail ist not valid");
}

//  validate on . in the mailadress could be email.includes("@") && email.includes(".")

// * && Und Bedingung
// * || Oder Bedingung




// # DOM
// D ocument
// O bject
// M Model

// ! document.getElementById()
// - search for an element via ID

// marry them 
let titleForWedding = document.getElementById("title")

// new name for the h1
titleForWedding.innerText = "New Name"
console.log(titleForWedding);



// ! document.querySelector()
// - ❤️‍🔥❤️ search element via class, id or html element 
// class with .
// id with #


// -class
// marry them
let elminsWedding = document.querySelector(".elmin")
// new name for h2
elminsWedding.innerText = "Quirin"


// - innerText
let h3 = document.querySelector("h3")
h3.innerText = "Ciao"

// - innerHTML
let boxContainer = document.querySelector(".container")
boxContainer.innerHTML = "<div class='box'> <h1> Ich komme von JS </h1> <p>Text</p> </div>"



// ! classList
// marry them
let untererBereich = document.querySelector("footer")

// - add
untererBereich.classList.add("jule")

// - remove
untererBereich.classList.remove("jule")

// - toggle -get the other condition (add or remove depending on what is given)
untererBereich.classList.toggle("jule")



// ! Window 
console.log(window);

// -Alert
// alert("Achtung")

// - confirm
// let ds = window.confirm("Datenschutzerklärung akzeptieren")
// console.log(ds);

// - prompt
// let nameUser = window.prompt("Wie heißt du")
// console.log(nameUser);


// * Example Check Age with 
// let alter = window.prompt("Bitte Alter angeben")
// console.log(alter);

// if (alter >= 18) {
//     window.alert("Viel Spaß beim Zocken.")
//     document.body.classList.add("green")
// } else {
//     window.alert("Du darfst noch nicht zocken.")
//     document.body.classList.add("red")
// }