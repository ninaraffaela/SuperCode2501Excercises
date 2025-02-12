const text = "Sam is going to codingschool"
// text = "Sam is going to school"


// # how to combine multiple uppercase parts ??
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
let e = text.slice(22)

// - first
console.log(a.toUpperCase()+ " " + b.toUpperCase() + " " + c.toUpperCase() + " " + d.toUpperCase()+ " " + e.toUpperCase());

// - second
console.log(a.toLowerCase()+ " " + b.toLowerCase() + " " + c.toLowerCase() + " " + d.toLowerCase()+ " " + e.toLowerCase());

// - third
console.log(a.toUpperCase()+ " " + b + " " + c + " " + d + " " + e.toUpperCase());

// - fourth
console.log(a + " " + b.toUpperCase() + " " + c.toUpperCase() + " " + d.toUpperCase() + " " + e);

// - fifth
// ! FirstLetters of each word uppercase

console.log(a.charAt(0).toUpperCase()+a.slice(1)+ " " +b.charAt(0).toUpperCase()+b.slice(1)+ " " + c.charAt(0).toUpperCase()+c.slice(1)+ " " + d.charAt(0).toUpperCase()+d.slice(1)+ " " + e.charAt(0).toUpperCase()+e.slice(1));










