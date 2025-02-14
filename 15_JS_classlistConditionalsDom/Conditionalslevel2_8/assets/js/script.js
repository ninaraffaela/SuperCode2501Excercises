
let username = window.prompt("Gib einen Username ein")
let password = window.prompt("Gib ein Passwort ein")

console.log(username);
console.log(password);

if(username === "admin" && password === "secure123"){
    console.log("Login erfolgreich");
    
} else if (username === "admin" && password !== "secure123"){
    console.log("Falsches Passwort");
    
} else if (username !== "admin" && password === "secure123"){
    console.log("Unbekannter User");
    
} else {
    console.log("please try again");
    
}