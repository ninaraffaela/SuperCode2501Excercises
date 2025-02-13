let einkaufswert = (Number(window.prompt("Gib den Einkaufswert an")))

if (einkaufswert > 100) {
    let rabatt = 20
    verkaufspreis = (einkaufswert * 80 / 100)
    console.log("Einkaufswert: ",einkaufswert, "Rabatt: ", rabatt, "Verkaufspreis: ", verkaufspreis);

} else if (einkaufswert <= 100 && einkaufswert >= 50){
    let rabatt = 10
    verkaufspreis = (einkaufswert * 90 / 100)
    console.log("Einkaufswert: ",einkaufswert, "Rabatt: ", rabatt, "Verkaufspreis: ", verkaufspreis);
    
} else {
    let rabatt = 0
    verkaufspreis = einkaufswert
    console.log("Einkaufswert: ",einkaufswert, "Rabatt: ", rabatt, "Verkaufspreis: ", verkaufspreis);
    
}



