// ! Daten anzeigen lassen in JS

// - console.log <3
console.log("Hello World - griasdeich")

// - alert
// alert("Fehler - deine email muss ein @ beinhalten")

// ! Variablen in JS
// * variable names are arbitrary and unique
// * preffered in english
// * never start with numbers
// * camelCase (first small, next word firstletter big - almost HöckerSchreibWeise
// * don´t use fixed terms like "null"

// - let
let age = 31;
let firstName = "Marzio";
console.log(firstName);

// edit the variable
firstName = "Alessio";
console.log(firstName);

// how to get the value and the variable
console.log({firstName});


// - const
const lastName = "Costantini"


// * Beispiel für let
let spielstand = "1:1";
spielstand = "1:2";
spielstand = "1:3";

// * beispiel für const
const geburtstag = "30.4.1993"



// ! Datentypen in JS
// - Primitives

// * String
let string = "something.dellrelrdkeir";
console.log(string);
// show the datetype
console.log(typeof string);


// * Number
// no quotation marks needed. shows in color in the console
let pi = 3.1415
console.log(pi);
// show the datetype
console.log(typeof pi);

// * Boolean
let isMature = false
console.log(isMature);


// - Smart DateTypes- Objects like Array or functions

console.log('%c Arrythmic Operations', 'background: teal; color: #fff' );

// !Arrythmic Operations
let a = 10;
let b = 3;


console.log(a+b); // + 
console.log(a-b); // -
console.log(a / b); // /
console.log(a * b); // *

console.log('%c increment decrement', 'background: teal; color: #fff' );
// - increment and decrement - value is changed on the go
console.log(++a);
console.log(--a);

console.log('%c Modulo', 'background: teal; color: #fff' );
// - Modulo operator
//  gives me the REST, after dividing the variables
console.log(a % b);
console.log(11 % 3);
console.log(111 % 13323); // can not be executed - gives you the first value

console.log('%c String Methods', 'background: teal; color: #fff' );
// ! String Methods
let text ="Hello JavaScript"

// - lenght
console.log(text.length);

// - uppercase
console.log(text.toUpperCase ());

// - lowercase
console.log(text.toLowerCase ());

// - replace and all
console.log(text.replace("Hel", "Cha"));
console.log(text.replace("l", "j"));
console.log(text.replaceAll("l", "j"));

// - sub string
console.log(text.substring(0,5)); // give me the characters until the 5th one

// - slice
console.log(text.slice(6,16));

// - endWith() startWith()
console.log(text.endsWith("!")); // check if the text ends with ("...")- boolean true/false
console.log(text.startsWith("H")); 

// - typeconversion
let num = "22"
console.log(num);
console.log(Number(num));

// - includes
console.log(text.includes("z")); // checks if ("...") is included


// ! Email Validiation
let email = "marzio@super-code.de"

if (email.includes("@") && email.endsWith(".de")) {
    console.log("E-Mail is valid");
}

else {
    // alert("E-Mail ist not valid");
}


// - String Concat
let firstNam = "Marzio"
let lastNam = "Costantini"
let alter = "33"
let wohnort = "Starnberg"

// * V1 - string concatenation
let satz = firstNam + " " + lastNam + " ist " + alter + " Jahre alt und wohnt in " + wohnort
console.log(satz);

// * V2 - (backticks needed) - template literals
let satzCool = `${firstNam} ${lastNam} ist ${alter} Jahre alt und wohnt in ${wohnort}.`
console.log(satzCool);


console.log('%c Number Methods', 'background: teal; color: #fff' )
// ! Number Methods

// - toFixed() - gives you a string - so transform with (Number ())
let pi2 = 3.14159265359
console.log(pi2.toFixed(6)); // gives you a string
console.log(Number(pi2.toFixed(6))); // changes the string to a number


// - round - but toFixed should be preferred
// console.log(Math.round(pi2));

// - isInteger() 
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.2)); // false


// - Typeconversion from number to string
let num2 = 244
console.log(num2.toString());

// - NaN - Not a Number
let x = "2424k242"
console.log(Number(x)); // shows NAN in the console, because of letters in the number
console.log(isNaN(x)); // ask if x is NaN. true/false
















