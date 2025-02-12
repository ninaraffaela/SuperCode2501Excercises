const text = "Sam is going to school"

console.log(text.toUpperCase());

console.log(text.toLowerCase());

// console.log(text.toUpperCase(0,4).toUpperCase(17));
// # how to combine multiple words ??

// ! Slice the words
// sam
let a = text.slice(0,3)

// is
let b = text.slice(4,6)

// going
let c = text.slice(7,12)

// to
let d = text.slice(13,15)

// school
let e = text.slice(16)


// ! Join the words
console.log(a.toUpperCase()+ " " + b + " " + c + " " + d + " " + e.toUpperCase());

console.log(a + " " + b.toUpperCase() + " " + c.toUpperCase() + " " + d.toUpperCase() + " " + e);


// ! FirstLetters of each word uppercase
console.log(text.charAt(0,5,8).toUpperCase()+text.slice(1));
// this only gives me the first letter of the first word










