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



