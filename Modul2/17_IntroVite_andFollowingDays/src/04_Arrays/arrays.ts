// ! ARRAY HOORAY

//* before
const shoppingListItem1 = 'toilet paper';
const shoppingListItem2 = 'guinness';
const shoppingListItem3 = "ice cream";


// Arrays are lists. not variables with one value, but multiple values per variable.

// * now
// - declare Array (string)

const shoppingItems: string[] = [
    'Toilet Paper', 
    'guinness', 
    'ice cream', 
    'peanuts', 
    'coffee', 
    'tea', 
    'broccoli']

// - how to get the values of the array?  
// * with index []. counter starts with 0

console.log("shoppingItems 4. Element: ", shoppingItems[1]);


// ! Number Array           0      1    2       3
const prices: number[] = [12.99, 2.50, 25.00, 99.99];

console.log(prices[1]);

// ! boolean Array
const boolenArray: boolean[] = [true, false, false, true, true];


// ! Set value into the array
//  index-zugriff mit [] =

shoppingItems[3] = "peanutbutter";
console.log(shoppingItems);



// ! ARRAY METHODS
// - length: length of the array - number of elements in the array
console.log("lenght of the array: ", shoppingItems.length);


// * END OF ARRAY
// - push:  add a new element to the end of the array
// push has kinda length included and gives back the length afterwards. i could also use the length as a variable then
// shoppingItems.push('Pasta');
const lengthAfterPasta = shoppingItems.push('Pasta');
console.log(lengthAfterPasta);

console.log(shoppingItems);

shoppingItems.push('Oregano', 'Cayenne Pepper')


// - pop:  removes element from the end of the array
// gives back the value of the removed element
const removedItem = shoppingItems.pop();
console.log(removedItem);

console.log(shoppingItems);



// * START OF ARRAY
// - shift - remove first element from the array. 
// gives back the value of the removed element
const removedItem2 = shoppingItems.shift();
console.log('Removed Element: ', removedItem2);

console.log(shoppingItems);


//  - unshift - add element to the start of the array
// gives back the new lenght of the array
const lengthAfterUnshift = shoppingItems.unshift('cookies');
console.log('lenght after unshift: ', lengthAfterUnshift);
console.log(shoppingItems);


