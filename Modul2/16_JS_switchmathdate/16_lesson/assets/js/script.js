// ! ===== Wiederholung =====
//$ #1
//$ Wir deklarieren eine Variable alter und weisen ihr einen Wert zu.
//$ Die if-Bedingung prüft, ob das Alter größer oder gleich 18 ist.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Du bist volljährig." ausgegeben.
//$ Andernfalls (else) wird die Meldung "Du bist noch minderjährig." ausgegeben.

// let alter = 20;

// if (alter >= 18) {
//   console.log("Du bist volljährig.");
// } else {
//   console.log("Du bist noch minderjährig.");
// }


//$ #2
//$ Wir deklarieren eine Variable number und weisen ihr einen Wert zu.
//$ Die if-Bedingung prüft, ob die Zahl zwischen 0 und 50 liegt.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Die Zahl liegt zwischen 0 und 50." ausgegeben.
//$ die nächste Bedingung prüft, ob die Zahl zwischen 51 und 100 liegt.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Die Zahl liegt zwischen 51 und 100." ausgegeben.
//$ Andernfalls (else) wird die Meldung "Die Zahl ist entweder größer als 100 oder kleiner als 0." ausgegeben.

// let number = 25;

// if (number >= 0 && number <= 50) {
//   console.log("Die Zahl liegt zwischen 0 und 50.");
// } else if (number >= 51 && number <= 100) {
//   console.log("Die Zahl liegt zwischen 51 und 100.");
// } else {
//   console.log("Die Zahl ist entweder größer als 100 oder kleiner als 0.");
// } 

//$ #3
//$ Wir deklarieren eine Variable userName und fragen den Benutzer nach seinem Namen ab. (window.prompt)
//$ Die if-Bedingung prüft, ob der Name leer ist (userName === "").
//$ Wenn der Name leer ist, wird die Meldung "Bitte gib deinen Namen ein." im HTML ausgegeben.
//$ Andernfalls wird eine Begrüßung mit dem eingegebenen Namen im HTML ausgegeben.

// let userName = window.prompt("Wie heißt du?")
// let output = document.querySelector(".name-output")

// if (userName === ""){
//     output.innerText = "Bitte gib deinen Namen ein."

// } else {
//     output.innerText = "Hallo " + userName
// }


// ! Neue Themen 
console.log("%c ===== switch =====", "color: teal");

// let randomErrorNumber = 3;

// if (randomErrorNumber === 1) {
//     console.log("Schwerer Fehler");
    
// } else if(randomErrorNumber === 2){
//     console.log("Mittelschwerer Fehler");
    
// } else if(randomErrorNumber === 3){
//     console.log("leichter Fehler");
    
// } else {
//     console.log("alles top");
    
// }

// - mit Switch - Einzelnummer
// switch (randomErrorNumber){
//     case 1:
//         console.log("Schwerer Fehler");
//         break;
//     case 2:
//         console.log("Mittelschwerer Fehler");
//         break;
//     case 3:
//         console.log("Leichter Fehler");
//         break;
//     default:
//         console.log("Alles top");
//         break;
// }

// - switch -zahlenbereich
// let number2 = -2


// switch (true){
//     case number2 >= 0 && number <= 50:
//         console.log("0-50");
//         break;
//     case number2 >= 51 && number <= 100:
//         console.log("51-100");
//         break;
//     default:
//         console.log("kleiner 0 oder größer 100");
//         break;
        
// }

// - switch - fallthrough (oderbedingungen)
// const fruitOrVegetable = window.prompt("Gib mir ein Obst oder Gemüse")

// switch(fruitOrVegetable) {
//     case "Banane":
//     case "Apfel":
//     case "Birne":
//         console.log("Banane Apfel Birne");
//         break;
//     case "Tomate":
//     case "Brokkoli":
//     case "Karotte":
//     case "Lauch":
//         console.log("Tomate Brokkoli Karotte Lauch");
//         break;
//     default:
//         console.log("kreative Wahl");
// }


// ! Math
console.log("%c ===== Math =====", "color: teal");

// -PI
const PI = Math.PI;
console.log(PI);

// - ceil - rundet auf die nächste ganzzahl
// console.log(Math.ceil(PI));

// - floor - rundet auf die vorherige ganzzahl
// console.log(Math.floor(PI));
// console.log(Math.floor(3.9999));

// - klassisches Runden (ab 0.5)
// console.log(Math.round(PI));
// console.log(Math.round(3.5));
// console.log(Math.round(3.4));
// kann ich round sagen, auf wieviele Nachkommastellen?
// console.log(Number(PI.toFixed(3)));

// - Mín max
// console.log(Math.min(1, 3, 56, 7, 90));
// console.log(Math.max(1, 3, 56, 7, 90));

// - random - random number between 0-0.9999999
console.log(Math.random()); // zahl zwischen 0 und 1 (exklusive)

console.log(Math.random() * 10); // zwischen 0 und 10 (exklusive)

console.log(Math.floor(Math.random()*10)); // zwischen 0 und 9 (inklusive)

console.log(Math.round(Math.random() * 100)); //



// * zufallszahl zwischen 1 und 10
const randomNum = Math.ceil(Math.random() * 10); 
console.log(randomNum);

// Alternativ
// const anotherRandomNum = Math.floor(Math.random() * 10) +1


// * Switch and random - 
// Verwende eine switch-Anweisung, um die folgenden Fälle abzudecken:
// Wenn die Zahl kleiner als 5 ist, soll "Kein Fehler" ausgegeben werden.
// wenn die Zahl kleiner als 8 ist, soll "Warnung" ausgegeben werden.
// Andernfalls soll "Fehler" ausgegeben werden.

switch (true){
    case randomNum < 5:
        console.log("Kein Fehler");
        break;
    case randomNum >= 5 && randomNum < 8:
        console.log("Warnung");
        break;
    default:
        console.log("Fehler");
        break;
}


// ! Date
console.log("%c ===== Date =====", "color: teal");

// - today - brackets empty => systemtime
const today = new Date()
console.log(today);

// - x milliseconds after birthdate of computers 1.1.1970
const startDate = new Date(5000) 
console.log(startDate);

// - string
const birthday = new Date("1994-11-09") 
console.log(birthday);

// - brackets filled with year, month, day, hour, minute, sec, millisec
const projectStartDate = new Date(2025, 1, 14) // month 12 would be Jan of following year
console.log(projectStartDate);
// # JS starts counting the month and weekdays at 0 - January = 0, Feb = 1, Mar = 2

// - Get the wochentag as number (so = 0, Fr = 5)
console.log("project Start Wochentag", projectStartDate.getDay());
// damit könnte man den Wochentag des Geburtstags rausfinden.

// - Get wochentag as Day of the month (14 = 14.)
console.log("Project Start Day", projectStartDate.getDate());

// - Get month - Jan = 0
console.log("Project Start Month", projectStartDate.getMonth());

// -Get Year
console.log("Project Start year", projectStartDate.getFullYear());

// - getTime - Milliseconds since then
console.log(projectStartDate.getTime());

// *Formatierung
console.log(projectStartDate.toLocaleString());
console.log(projectStartDate.toLocaleString("en-GB"));
console.log(projectStartDate.toLocaleString("en-US"));
console.log(projectStartDate.toLocaleString("de-DE", {timezone: "UTC"})); 




// ! Ternary expression
console.log("%c ===== Ternary Expression =====", "color: teal");
// [Bedingung] ? [execute if true] : [execute if false]

const isOnline = Math.random() <= 0.5; // dadurch kommt ein boolean raus
console.log(isOnline);

//* "Langschreibweise" mit if
if (isOnline){
    console.log("User ist Online");
    
} else {
    console.log("User ist offline");
}

// * Ternary expression <3 
const message = isOnline ? "User ist Online" : "User ist Offline"
console.log(message);



// ! nullish coalescing operator
console.log("%c ===== nullish coalescing operator =====", "color: teal");

let userName;

// * "Langschreibweise" mit ternary
const output = userName !== null && userName !== undefined ? userName : "unknown"

console.log(output);

// * nullish coalescing operator <3
userName = "Hao"
const output2 = userName ?? "Unknown"
console.log(output2);