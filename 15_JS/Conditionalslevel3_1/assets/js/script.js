let budget = (Number(window.prompt("Gib dein Budget an")))
let climate = ((window.prompt("Gib dein Lieblingsklima ein. (warm/kalt/mild)")))
let style = ((window.prompt("Gib deinen Urlaubsstyle an. (Abenteuer/Entspannung)")))


if (budget < 1200) {
    console.log("Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.")

} else if (budget >=1200 && climate === "warm" && style === "Abenteuer"){
    console.log("Reise nach Thailand für ein Dschungelabenteuer!");
    
}  
else if (budget >=1200 && climate === "warm" && style === "Entspannung"){
    console.log("Reise nach Bali für einen Strandurlaub!");
    
}  

else if (budget >=1200 && climate === "kalt" && style === "Abenteuer"){
    console.log("Norwegen: Perfekt für eine Nordlicht-Wanderung");
    
}  

else if (budget >=1200 && climate === "kalt" && style === "Entspannung"){
    console.log("Island: Heiße Quellen und wunderschöne Landschaften!");
    
}  

else if (budget >=1200 && climate === "mild"){
    console.log("Spanien oder Portugal sind großartige Reiseziele für dich!")
}

else {
    console.log("Bitte prüfe deine Eingaben");
    
}



