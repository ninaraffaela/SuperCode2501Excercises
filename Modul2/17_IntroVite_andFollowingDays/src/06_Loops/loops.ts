

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

// ! FOR-LOOP
// for (start, condition,)



// # DANGER!!! INFINITY LOOPS. LISTEN:
// ALWAYS CHECK IF YOUR CONDITION CAN BE REACHED - EVER!!

// * example: start index with 6 and condition >= 5. 
// could never be true....

// let for (let i = 6; i >=5; i++) {
// console.log(i);
// }
// #



// ! BASIC LOOP EXAMPLES
for (let i = 13; i < 24; i++) {
    console.log("aktueller index:", i);
}

// * count up in 2er Schritte
for (let i =0; i < 20; i +=2) {
    console.log("+2", i);
}

// * count down from 20
for (let i = 20; i >= 0; i--) {
    console.log("countdown:", i);
}


// * check all numbers from 0 - 30. only log the ones, that are /3s

for (let i = 0; i <= 30; i++) {
    // i % 3 === 0 ? console.log(i) : "";
}

// if (i % 3 === 0){
//     console.log(i);
// # EDIT NEEDED: check this part above again.




// ! LOOP EXAMPLE: sum the numbers from 1-10

let sumOfNumbers = 0;

// what is in the angular brackets of for:
//  i = 1: start with 1
// i <=10: as long as the number is within the range until 10
//  i ++: after every round add one to i
for (let i = 1; i <= 10; i++) {
    console.log(`${sumOfNumbers} plus ${i} = `);
    sumOfNumbers += i;
    if(i ===10){
        console.log("We arrived the end of the Loop 💚 final sum:");
    }

    console.log(sumOfNumbers);
    
}






// ! run through an array with a for loop
// - BUT. with arrays rather use foreach and map. 
// - but you couuld. so here´s an example:

const numbersToEleven =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(numbersToEleven.length);

for (let i = 0; i < numbersToEleven.length; i++) {
    console.log("Element meines Arrays:", numbersToEleven[i]);
    
}

// - instead forEach for the array
numbersToEleven.forEach((num) => {
    console.log("Element meines Arrays:", num);
});





// ! FILL AN ARRAY WITH A FOR LOOP
// * example: fill an array with the numbers 1-20

const numbersToTwenty = [];

for (let i = 1; i <= 20; i++) {
    numbersToTwenty.push(i);
}

console.log(numbersToTwenty);





// ! WHILE LOOP
// we create the counter ourselfes. and count up in the loop ourselfes.
// alternative to for loop

// * example, write 10 times "Hello World from while Loop"

let counterForWhile = 0; 

while (counterForWhile < 10) {
    console.log("Hello World from while Loop");
    counterForWhile++;
    // # careful here. if you would not count up with ++, it would be an infinity loop!!!
    // so always make shure, you reach your condition!!   
}


// * react to a user Input with while
// * annoy the user. unless the right input is "STOP", a promp would show up.
// let userInput = "";
// while (userInput !== "STOP") {
//     userInput = window.prompt("Guess the Input") ?? "";
// }




// ! DO-WHILE LOOP
//  we also have to count it up ourselfes!!
// code is executed at least once. !! no matter the condition, it runs)

// - do while - will log no matter what. in the next round it goes over the condition first.
let counterForDoWhile = 5;

do {
    console.log("Hello World from Do While");
    
} while (counterForDoWhile < 5);




// - vs version with while
while (counterForDoWhile < 5) {
    console.log("Hello World from While example 2");
    
}


// * EXAMPLE: do while "count up from 1 to 10"
// was estimated, to be used seldom
let doWhileCounter = 1;

do {
    console.log(doWhileCounter);
    doWhileCounter++;
    
} while (doWhileCounter <= 10);



// ! FOR OF 
// run through an array, in every loop you get the current element of the array. (useful)

// * EXAMPLE: get all the single elements fo the array
const meals = ["Brezn", "Mashed Potatoes", "Soup", "Broccoli", "Sandwich"];

// - for of option
for (const singleMeal of meals) {
    console.log(singleMeal);
}

// - vs. foreach option
meals.forEach((singleMeal) => console.log(singleMeal));





// ! BREAK
//  interrupt the loop. take a breake 

const birds = [
    "Wellensittich",
    "Rabe",
    "Maise",
    "Specht",
    "🐧",
    "Drossel",
    "Amsel",
    "Tannenhäher",
    "🐧",
    "Adler",
    "Spatz",
  ];

  console.log("%c === break ===", "background-color: teal");
  
  for (let i = 0; i < birds.length; i++) {
    if (birds[i] === "🐧") {
        console.log("pinguin reached. i´m gonna break the loop");
        break;
    } 
    console.log(birds[i]);
    
  }

// ! CONTINUE
// with continue, the current round will be skipped. it continues with the next round
// you could filter certain rounds. 
console.log("%c === continue ===", "background-color: teal");
for (let i = 0; i < birds.length; i++) {
    if (birds[i] === "🐧") {
        console.log("pinguin reached. i´m gonna skip him and continue the loop");
        continue;
    } 
    console.log(birds[i]);
  }
