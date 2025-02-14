// user gibt alter ein
let age = window.prompt("Please insert your age");
// alter in konsole anzeigen
console.log(age);

// ternary 
const grownup = age >= 18 ? "volljährig" : "minderjährig";
console.log(grownup);

// html
let output = document.querySelector(".output");
output.innerHTML = grownup;


