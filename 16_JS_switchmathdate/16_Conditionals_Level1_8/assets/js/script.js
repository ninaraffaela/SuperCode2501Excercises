let auswahl = window.prompt(
  "Please choose your drink. 1- Wasser. 2- Cola. 3- Orangensaft. 4- Kaffee. 5- Tee"
);

switch (auswahl) {
    case "1":
        console.log("Wasser");
        break;
    case "2":
        console.log("Cola");
        break;
    case "3":
        console.log("Orangensaft");
        break;
    case "4":
        console.log("Kaffee");
        break;
    case "5":
        console.log("Tee");
        break;
    default:
        console.log("Ungültige Auswahl");
        break;
}