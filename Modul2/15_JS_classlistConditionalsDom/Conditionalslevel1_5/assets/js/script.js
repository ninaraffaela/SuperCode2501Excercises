let punktzahl = window.prompt("Gib deine Punktzahl ein")

if (punktzahl <= 49) {
    console.log("Nicht bestanden");
} else if (punktzahl <= 74){
    console.log("Befriedigend");
} else if (punktzahl <= 89){
    console.log("Gut");
} else if (punktzahl <= 100){
    console.log("Sehr gut");
    
} else {
    console.log("Ungültige Punktzahl");
    
}


