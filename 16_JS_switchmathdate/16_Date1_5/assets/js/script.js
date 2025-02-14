
// - jahr auf 2200
const date1 = new Date();

date1.setFullYear(2200)

let output1 = document.querySelector(".output1");
output1.innerHTML = date1

// - Jahr auf 2200 und Monat auf Jul

const date2 = new Date();

date2.setFullYear(2200, 6)

let output2 = document.querySelector(".output2");
output2.innerHTML = date2


// - Month auf Jul
const date3 = new Date();

date3.setMonth(6)

let output3 = document.querySelector(".output3");
output3.innerHTML = date3


// - + 3 Days
const date4 = new Date();

date4.setDate(17)

let output4 = document.querySelector(".output4");
output4.innerHTML = date4
