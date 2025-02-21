//  ! CONCAT() - 
// joins 1 or more arrays and saves it as a new array

const groceries:string[] = [
    "Avocado",
    "Tomato",
    "Sourcream",
    "Cheese",
    "Taccos"
]

const drinks:string[] = [
    "Water",
    "Radler",
    "Guinness",
    "Cider"
]


const shoppingList: string[] = groceries.concat(drinks);
console.log(shoppingList);

// ! Copy Arrays
//* copy in easy datetypes (number boolean etc.) does not change the former values

let priceOfShoes = 69.99;
console.log(priceOfShoes);

let priceOfBackpack = priceOfShoes;
console.log(priceOfBackpack);

priceOfShoes = 79.99;
console.log(priceOfShoes);

priceOfBackpack = 59.99;
console.log(priceOfBackpack);


//* copy arrays -
const fruits = ["Banana", "Peach", "Cherry", "Apple"];
console.log(fruits);

// # does not get a copy of the array, but the place of the original array
// const deliciousFruits = fruits; 
// console.log(deliciousFruits);
// # pops the last element of the original array
// deliciousFruits.pop(); 
// console.log(fruits); 
// console.log(deliciousFruits);

// ! Save copy
// * copy with SLICE (without parameter) copies the original array

const safeCopyWithSlice = fruits.slice();
safeCopyWithSlice.pop();
console.log(fruits);
console.log(safeCopyWithSlice);


// * copy with CONCAT
const safeCopyWithConcat = fruits.concat();
safeCopyWithConcat.pop();
console.log(fruits);
console.log(safeCopyWithConcat);


// *  ❤️‍🔥 copy with SPREAD ... copies all elements of the array
const safeCopyWithSpread = [...fruits];
safeCopyWithSpread.pop();
console.log(fruits);

console.log(safeCopyWithSpread);

// - get multiple arrays
const vegetables = ["Broccoli", "Champignons", "Cabbage"];

const fruitsAndVeggies = [...fruits, ...vegetables];
console.log(fruitsAndVeggies);

const fruitsAndVeggies2 = ["Broccoli", "Champignons", "Cabbage", ...fruits];
console.log(fruitsAndVeggies2);




// ! Sort()
console.log(
    "%c === SORT === ", "background-color: teal"
);
// sorts Elements in an array
// without parameter - default alphabetic ascending

const marziosLieblingsAutos = [
    "Porsche",
    "BMW",
    "Mercedes",
    "Landrover",
    "Citroen",
    "Chrysler"
]
console.log(marziosLieblingsAutos);

// * sort alone
//# without a copy we also sort the original array
// const sortedArray = marziosLieblingsAutos.sort();
// console.log(marziosLieblingsAutos);
// console.log(sortedArray);

// * instead spread and sort combined
const copiedSortedArray = [...marziosLieblingsAutos].sort(); // copy of the originial and sort
console.log(marziosLieblingsAutos); // original stays the same
console.log(copiedSortedArray); //copied sorted new array


// ! SORT STRINGS ALPHABETICALLY  with localCompare ()
//* ascending - a.localCompare(b)

const copyOfMarziosLieblingsAutos = [...marziosLieblingsAutos];
console.log(copyOfMarziosLieblingsAutos.sort((a, b) => a.localeCompare(b))); // a + b are placeoholders. name free

// * descending - b.localCompare(a)
console.log(copyOfMarziosLieblingsAutos.sort((a, b) => b.localeCompare(a))); // a + b are placeoholders. name free


// ! SORT NUMBERS
// * with SORT() - sorts it lexicalic (ASCII)  
// # not usable with multiple digit numbers. (2, 222, 3, 34 etc)
const numArr = [34, 89, 46, 234, 222, 3];
console.log(numArr.sort());

// * with sortNumAscending()

function sortNumAscending(a: number, b: number) {
    return a - b;
}
console.log("ascending sorted: ");
console.log(numArr.sort(sortNumAscending));



// * with sortNumDecending()
function sortNumDescending(a: number, b: number) {
    return b - a;
}
console.log("descending sorted: ");
console.log(numArr.sort(sortNumDescending));

// * Short Version with Arrow Fn
// console.log(numArr.sort((a, b) => a - b));
// console.log(numArr.sort((a, b) => b - a));



// ! REVERSE 
console.log(
    "%c === REVERSE === ", "background-color: teal"
);
// reverses the order

console.log(marziosLieblingsAutos.reverse());

const copiedReverseArray = [...marziosLieblingsAutos].reverse();
console.log(copiedReverseArray);


// ! SEARCH IN ARRAYS FOR SINGLE ELEMENTS
console.log(
    "%c === SEARCH FOR SINGLE ELEMENTS === ", "background-color: teal"
);

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

//   - indexOf()
// you get the index. first appearance of the target.  
//  if target not found you get -1

const indexOfPenguin = birds.indexOf("🐧");
console.log(indexOfPenguin);
//  you´d get the other penguin with const indexOfPenguin = birds.indexOf("🐧",5); Starts the search at position 5

// - lastIndexOf()
// last appearance of the target. you get the index.
const lastindexOfPenguin = birds.lastIndexOf("🐧");
console.log(lastindexOfPenguin);

// - includes()
// is the target included? gets a true or false
const includesPenguin = birds.includes("🐧"); // needs the exact value. "Ra" to search for "Rabe" won´t work
console.log(includesPenguin);

// - find()
// you get the first found target.
//  you can define the search
//  if not found you get -1
//                             1.  name the elements of the array (just a placeholder for the elements)
//                                          2. check the element. run function startsWith()
const birdWithA = birds.find((singleBird) => singleBird.startsWith("A"));
console.log(birdWithA);



const drossel = birds.find((singleBird) => singleBird === "Drossel");
console.log(drossel);




// ! EDIT MULTIPLE ELEMENTS WITH MAP() UND FOREACH()
console.log(
    "%c === EDIT MULTIPLE ELEMENTS === ", "background-color: teal"
);

// -  MAP()
// runs the function for every element of the original array
// gives you a new array
// function foreach() would do the same BUT does not give you a new array

// ? all elements in Birds should get "!" at the end.
// * instead of
// birds[0] = birds[0] + "!";
// birds[1] = birds[1] + "!";
// birds[2] = birds[2] + "!";

// * use map() instead
const birdsWithExclamationMark = birds.map((singleBird) => singleBird + "!");
console.log(birdsWithExclamationMark);

// ? give me the length of each element
const birdLength = birds.map((singleBirds) => singleBirds.length);
console.log(birdLength);

// ? write all the Birds in uppercase
const upperCaseBirds = birds.map((singleBird) => singleBird.toUpperCase());
console.log(upperCaseBirds);

// ? complex logics possible. 
const birdsWithAUpperCase = birds.map((singleBird) => {
    if (singleBird.startsWith("A")) {
        return singleBird.toUpperCase();
    } else {
        return singleBird.toLowerCase()
    }
})
console.log(birdsWithAUpperCase);


// - FOREACH()
// same logic as map() BUT doesn´t give you a new array

birds.forEach((singleBird) => console.log(`Das it ein ${singleBird}`));

// * FOR MAP() and FOREACH() you can use a second Parameter, which will be the index.
birds.forEach((singleBird, indexName) => console.log(`Das it ein ${singleBird} und hat den Index ${indexName}`));



// ! FILTER
console.log(
    "%c === FILTER === ", "background-color: teal"
);
//  with find() we could search, but only got the first element. Filter gets all of them
// gives back a new array.

// ? all birds starting with A
// * trust that the array elements start with capital letters
// const allBirdsWithA = birds.filter((singleBird) => singleBird.startsWith("A"));

// * Better. turn the elements in to lowercases or uppercases and compare then
const allBirdsWithA = birds.filter((singleBird) => singleBird.toLowerCase().startsWith("a"));
console.log(allBirdsWithA);


// ? get all the penguins and Raven
const allPenguinsAndRaven = birds.filter((singleBird) => singleBird === "🐧" || singleBird === "Rabe");
console.log(allPenguinsAndRaven);
