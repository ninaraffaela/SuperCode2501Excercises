// ! ARRAY HOORAY
console.log("%c ===== ARRAY HOORAY =====", "background-color: teal;");
// * zero-based index

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
console.log("%c ===== ARRAY METHODS =====", "background-color: teal;");
// - LENGTH: length of the array - number of elements in the array
// it´s a property. not a function like the others. therefore no angular brackets needed.
console.log("lenght of the array: ", shoppingItems.length);


// * AT THE END OF THE ARRAY
// - PUSH:  add a new element to the end of the array
// push has kinda length included and gives back the length afterwards. i could also use the length as a variable then
// shoppingItems.push('Pasta');
const lengthAfterPasta = shoppingItems.push('Pasta');
console.log(lengthAfterPasta);

console.log(shoppingItems);

shoppingItems.push('Oregano', 'Cayenne Pepper')


// - POP:  removes element from the end of the array
// gives back the value of the removed element
const removedItem = shoppingItems.pop();
console.log(removedItem);

console.log(shoppingItems);



// * AT THE START OF THE ARRAY
// - SHIFT - REMOVE FIRST ELEMENT from the array. 
// gives back the value of the removed element
const removedItem2 = shoppingItems.shift();
console.log('Removed Element: ', removedItem2);

console.log(shoppingItems);


//  - UNSHIFT - ADD ELEMENT TO THE START of the array
//# gives back the new lenght of the array
//                                                name of the element to add
const lengthAfterUnshift = shoppingItems.unshift('cookies');
console.log('lenght after unshift: ', lengthAfterUnshift);
console.log(shoppingItems);




//!  ====== splice, slice, split
console.log("%c ===== splice, slice, split=====", "background-color: teal;");

const shoppingItems2: string[] = [
    'Toilet Paper', 
    'guinness', 
    'ice cream', 
    'peanuts', 
    'coffee', 
    'tea', 
    'broccoli'];


// - SPLICE - REMOVE AND ADD ON SPECIFIC INDEXPOSITION
//* insert Pasta, put it on index position 3
//                    1. indexposition to go to
//                       2. deletecount- how many to delete
//                             3. new element - what to insert
shoppingItems2.splice(3, 0, "Pasta");
console.log(shoppingItems2);

//*  how to remove Pasta and Peanuts (index 3 and 4)
const splicedElements = shoppingItems2.splice(3, 2);
console.log(shoppingItems2);
console.log(splicedElements);

// * how to insert eggplants after toiletpaper
shoppingItems2.splice(1,0, "Eggplants");
console.log(shoppingItems2);



//* splice with only one number 
const exampleArray: string[] = ["test1", "test2", "test3", "test4"]
//                  remove from this indexposition
exampleArray.splice(2);
console.log(exampleArray);


// - SLICE - COPY PARTS of the array
// * copy complete array
const allItemsSlices = shoppingItems2.slice();
console.log("full copied array: ");
console.log(allItemsSlices);


// * how to copy tea and broccoli
const slicedFrom5 = shoppingItems2.slice(5);
console.log("slice from 5: ");
console.log(slicedFrom5);

// * how to copy guinness and ice crream
// # index on end, is exclusive. so you basically have jumpmarks only in front of the indexes.
//                                         1. start
//                                            2. end
const sliceGuinness = shoppingItems2.slice(2, 4);
console.log(sliceGuinness);


// - SPLIT - splits the array into multiple parts
// gives back a string array

// * get single words - split with " "
const songText = "At Last. My Love has come along";
const singleWords = songText.split(" ");
console.log(singleWords);

// * get single letters - split with ""
const hangman = "Kronkorkenzackenzaehlmaschine";
const singleLetters = hangman.split("");
console.log(singleLetters);


// * get the sentences - split with "."
const lyrics = "Never gonna give you up. Never gonna let you down. Never gonna run around an desert you.";
const lyricsSentences = lyrics.split(".");
console.log(lyricsSentences);
// the fullstops are gone afterwards though. if you split with ". ", fullstops would still be gone. but i would not have an empty last array.


// - JOIN - joins string Arrays to a full String
console.log(lyricsSentences.join()); // uses comma separation
console.log(lyricsSentences.join(" * * * ")); //uses the given separator

console.log(singleLetters.join()); // uses comma separation
console.log(singleLetters.join("")); // uses the given separator

console.log(shoppingItems2.join(", ")); // uses the given separator









