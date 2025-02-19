// ! Wiederholung

//- Unterschied zwischen Funktionsdeklaration und Funktionsaufruf.
// Deklaration erstellt die FN
// Aufruf: Führt die FN aus

// - Was sind Parameter und Argumente in Funktionen?
// Parameter: Platzhalter fuer Werte
// Argumente: tatsächlicher Wert der den Parameter dann füllt

// - Wie gibst du einen Wert aus einer Funktion zurück?
// Return

// - Was sind optionale Parameter und wie deklarierst du sie?
// Parameter die optional sind. deklariert mit ?

// - Was sind Default-Parameter und wie deklarierst du sie?
//  Parameter mit einem default/Standard Wert. deklariert mit = im Parameter

// - Erkläre den Unterschied zwischen globalen und lokalen Variablen (scope)
// globale Variable: ueberall im Code sichtbar / nutzbar (außerhalb curly brackets)
// lokale Variable: variable die nur innerhalb von FN / CodeBloecken sichtbar/ zugaenglich sind( innerhalb curly brackets)



//$ Erstelle eine Funktion namens greetPerson, die eine Person mit ihrem Namen und einer optionalen Nachricht begrüßt.
//$ Wenn eine Nachricht übergeben wird, soll die Funktion "Hallo [Name], [Nachricht]" in der Konsole ausgeben. Wenn keine Nachricht übergeben wird, soll die Funktion "Hallo [Name]" ausgeb

function greetPerson(name:string, message?:string){
    if (message) {
        console.log(`Hi ${name}, ${message}`);
        
    } else {
        console.log(`Hi ${name}`);
     }
}

// ternary version 
function greetPerson2(name: string, message?: string) {
    console.log(`Hallo ${name}${message ? "," + message : ""}`);
  }
  
  greetPerson2("Oguz");
  greetPerson2("Anna", "wie geht's?");


  //$ Schreibe eine Funktion namens isEven, die eine Zahl als Parameter akzeptiert und true zurückgibt, wenn die Zahl gerade ist, und false, wenn sie ungerade ist.

  function isEven(num: number){
        if(num % 2 == 0){
            return true;
        } else {
            return false;
        }
  }

  console.log(isEven(123));
  

//   ! Arrow Functions
//  functions with a Fat Arrow =>

// - KLASSISCH
function printMessage(message: string){
    console.log(message);
}

printMessage("functions are super");

// - ARROW FUNCTION
const printMessageArrow = (message: string) => {
    console.log(message);
    
}

printMessageArrow("Arrow Functions too")

// ! coole "Features" von Arrow FN
//* wenn die FN nur aus einer Zeile besteht, kann man die curly brackets weglassen

const printMessageArrow2 = (message: string) => console.log(message);

// * bei einer einzeiligen Funktion kann ich das return keyword weglassen.

// - KLASSISCH
// function add(a: number, b: number) {
//     return a + b
// }

// - ARROW FUNCTION long
// const add = (a: number, b: number) => {
//     return a + b
// }

// - ARROW FUNCTION short
const add = (a: number, b: number) => a + b;


// ! EventListener

// * 1. define the element, the event-listener should look at/listen to

const meineH2 = document.querySelector<HTMLHeadingElement>(".change-color");

// * 2. Add EventListener: method addEventListener(). this method needs 2 arguments:
// - a) the event you wait for (z.B. click, mouseover, mouseout)
// MouseClick: click
// MouseMovement: mouseover, mouseout
// KeyboardEntry: keydown, keyup
// FormEntries: submit, change
// LoadPage: load

// - b) the function that is called, when event happens (this time without brackets)
meineH2?.addEventListener("click", changeColor);

function changeColor() {
    if (meineH2) {
        meineH2.style.color = "red";
}
}

meineH2?.addEventListener("mouseout", changeColor2);

function changeColor2() {
    if (meineH2) {
        meineH2.style.color = "teal";
        meineH2.style.fontSize = "30px";
        meineH2.innerText = "uuuh fancy new text";
    }
}

// ! Build a Switch between dark/light mode ☀
// - pick the img tag. (without class or id, because now there is only one)
const darkLightSwitch = document.querySelector("img");
const bodyElement = document.querySelector("body");

// - put the eventlistener to the img tag
darkLightSwitch?.addEventListener("click", toggleDarkLighttMode);

function toggleDarkLighttMode() {
    if(bodyElement) {
        bodyElement.classList.toggle("dark");
    }
}

// ! VAlUE / FORM
const nameInputForm = document.querySelector("form");
const userNameInput = document.querySelector<HTMLInputElement>("#name"); //to tell js/ts that usage of value down ther is allowed.
const outputDiv = document.querySelector(".output");

// -submit can be used to look at the html input tag type submit
nameInputForm?.addEventListener("submit", greetUser)

//*it would refresh the page that 

// function greetUser () {
//     let userName;

//     if(userNameInput){
//         userName = userNameInput.value
//     }

//     if(outputDiv) {
//         outputDiv.innerHTML = `<h3>Hallo ${userName}</h3>`;
//     }
// }

// * tht way you prevent the reload, after reload of the page.!!!
function greetUser (event: Event) {
    event.preventDefault();

    let userName;

    if(userNameInput){
        userName = userNameInput.value
    }

    if(outputDiv) {
        outputDiv.innerHTML = `<h3>Hallo ${userName}</h3>`;
    }
}

// ! Register Form
const registerForm = document.querySelector(".register-form");
const userName = document.querySelector<HTMLInputElement>("#user-name");
const userMail = document.querySelector<HTMLInputElement>("#user-mail");
const userIcon = document.querySelector<HTMLInputElement>("#user-icon");
const userDatenschutz = document.querySelector<HTMLInputElement>("#datenschutz");

registerForm?.addEventListener("submit", confirmRegistry);

function confirmRegistry(event:Event){
    event.preventDefault();

    if (!userName || !userMail || !userIcon || !userDatenschutz) {
        console.log("Eines oder mehrere Formularelemente wurden nicht gefunden");
    
    } else {
        const name = userName.value;
        const email = userMail.value;
        const icon = userIcon.value;
        const datenschutz = userDatenschutz.checked;

        if (outputDiv) {
            outputDiv.innerHTML =
            `<h4>Erfolgreich registriert</h4>
            <p>Your Username: ${name}</p>
            <p>Your mail: ${email}</p>
            <p>Your Icon: ${icon}</p>
            <p>DatenschutzRichtlinien akzeptiert?: ${datenschutz}</p>`;
        }
    }

}
