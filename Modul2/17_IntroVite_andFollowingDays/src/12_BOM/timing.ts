// ! Timing Events
console.log("%c ===== Timing Events =====", "background-color: teal");

// ! Set Timeout
// set a time, after which something is done

// - do smth after 2 seconds
// * 1. parameter: FN / Callback FN
// * 2. parameter: amount of milliseconds, after which something should happen
// * 2 seconds = 2000 milliseconds

window.setTimeout(() => {
    console.log("2 seconds are done");
    
}, 2000);


// - show an alert
// setTimeout(() => {
//     window.alert("are you still watching?")
// }, 5000)


// - alternative to the anonymous Function
setTimeout(someFN, 2000);

function someFN() {
    console.log("i do things");
    
};

// ! Set Interval
// - define a time, after which something is done repeatedly
// * 1. parameter: FN / Callback FN
// * 2. parameter: amount of milliseconds, after which something should happen

// setInterval(() => {
//     console.log("2 seconds are done");
// }, 2000);


// ! clear Interval
// # we have to safe setInterval in a variable, to be able to delete it again
const intervalToDelete = 
setInterval(() => {
    console.log("2 seconds are done");
}, 2000);

clearInterval(intervalToDelete);


// ! another interval example
// - all 2 seconds smth should be logged in the console. stop after 4 runs

let counter = 0;
const intervalPizza = setInterval(() => {
    counter++;
    if (counter <= 4) {
        console.log("Peel the Avocado");
    } else {
        clearInterval(intervalPizza);
        console.log("Guacamole");
    }
}, 2000);



// ! Countdown
// - every second the countdown will be counted down by 1

const countdownElement = document.querySelector<HTMLDivElement>("#countdown")

if (countdownElement) {
    countdownElement.style.fontSize = "4rem";
    let counter = 11;
    let intervallPizzaFunghi = setInterval(() => {
        counter--;
        countdownElement.innerText = counter.toString();
        if (counter === 0) {
            countdownElement.innerText = "BOOM💥";
            clearInterval(intervallPizzaFunghi);
        }
    }, 1000)
}