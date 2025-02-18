// ! Functions
// - grundlegende Bausteine in js/ts /anderen Programmiersprachen.
// - eigenständige Codeblöcke die Aufgben für uns ausführen
// - wiederverwendbar und machen den code modular und besser wartbar (...we´ll see about that^^))

// * 1. declare it
function sayHi(){
    console.log(`Hallo Jule`);
}

// * 2. call it
sayHi();

// ! Function with parameter
// * 1. declare it - firstName in this case just a placeholder, not neccessarily a variable
function sayHuhu(firstName: string){
    console.log(`Huhu ${firstName}`);
}

// * 2. call it - firstName here just a typed string
sayHuhu("Hao");
sayHuhu("Mina");
sayHuhu("Elmin")

// * 2. call it from variable
const name = "Nina"
sayHuhu(name);



// ! function with 2 parameters
function addMe(zahl1: number, zahl2: number){
    console.log(zahl1 + zahl2);
}

addMe(3,4);
addMe(9, 67);
// addMe("5", "4"); // argument of type string is not assignable to parameter of type number


// ! Function with return value
// - example 1
function addTwenty(inputNumber: number){
    // console.log(inputNumber + 20);
    return inputNumber + 20
}

let newNumber = addTwenty(5);
console.log(newNumber);


//  - example 2
// # set a placeholder name for the return value. it´s not a variable that has to be used later.
function mixer(ingredient1: string, ingredient2: string){
    let smoothie = `mmm ein leckerer ${ingredient1}-${ingredient2}-Smoothie - Bitteschön`
    return smoothie
    // return `mmm ein leckerer ${ingredient1}-${ingredient2}-Smoothie - Bitteschön`
}

let meinSmoothie = mixer("Kirsch", "Banane")
console.log(meinSmoothie);


// ! Function with optional parameter
// # required parameter can not follow an optional parameter
function greetUser(firstName: string, lastName?: string){
    if (lastName) {
        console.log(`Hi ${firstName} ${lastName}`);
    } else {
        console.log(`Hi ${firstName}`);
    }
}

greetUser("Marco")
greetUser("Marco", "lastName")





// ! Functions with default parameter
// -Set a defaualt parameter
// when no value is given, it uses the default

function orderfood(meal: string, quantity: number = 1){
    const orderConfirmation = `Successfully ordered ${meal} x ${quantity}`;
    console.log(orderConfirmation);
    
}

orderfood("Pizza Funghi", 10);
orderfood("Pizza Tonno");


// ! VARIABLES - Scope of Variables
// globale vs. local 

// - Global Variable
//# global variable stand outside of curly brackets. on the toplayer. outside of functions. 
// # visible and usable everywhere.
const globalVariable = "Marzio";

function printName(){
    // - local variable
    //# a local variable is only known in its own function. in curly brackets. 
    // # visible and usable only in curly brackets.
    const localVariable = "Costantini";
    console.log(`Hallo ${globalVariable} and ${localVariable}`);
    
}
// - call global and local outside of the function
printName();

console.log(globalVariable);
// console.log(localVariable); // localVariable does not exist here.


// - example 2
// #CHECK THAT LATER. probably not complete.
function printName2() {
    const localVarDoener = "Costantini";
    console.log(`Hallo ${globalVariable} ${localVarDoener}`);

    if (globalVariable === "Marzio") {
        const anotherLocalVar = "ist another local var";
        console.log(`${globalVariable} ${anotherLocalVar}`);
        
    } else {
        console.log(`Hallo ${globalVariable} ${localVarDoener}`);
    }
}


// ! Naming of functions
// * start with lowercase
// * use camelCase
// * verb + object (+ more criteria, specification)
//  calculateAge() {}
// * use the fullwords. you want to be able to read it later.... ;)
//  instead of crtTemF() {}  use createTemporaryFilee() {}
// * make use of singular and plural
// * use "get..." and "set..." as start of a functionName
// getUserData() {}
// setShoppingCart() {}