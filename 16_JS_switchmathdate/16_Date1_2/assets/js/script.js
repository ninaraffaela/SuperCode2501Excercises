const now = new Date();
console.log(now);

// manuell..... -.- 
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(date + "." + (month +1)+ "." + year);

console.log(hour + ":" + min + ":" + sec)


// quick and easy
console.log(now.toLocaleString("de-DE", {timezone: "UTC"})); 

