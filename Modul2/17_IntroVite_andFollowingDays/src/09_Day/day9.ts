// ! DAY 9 - 
// * Wiederholung Enums:  Enum Exercise 2_2  

enum ClothingColors {
    Gelb = "#ffff00",
    Orange = "#ff6347",
    Pink = "#ffc0cb",
    Blau = "#3535ec",
    Lila = "#5a0d5a",
    Grau = "#9e9d9d",
}

const output = document.querySelector(".output-div");

const allColors: ClothingColors[] = [
    ClothingColors.Gelb,
    ClothingColors.Orange,
    ClothingColors.Pink,
    ClothingColors.Blau,
    ClothingColors.Lila,
    ClothingColors.Grau,
];

console.log(allColors);

if (output) {
    allColors.forEach((hexColor) => {
        output.innerHTML += `<button style="Background-color: ${hexColor}">${hexColor}</button>`;
    })
};

console.log("geht");


// how to get the name of the color onto the button
// - v1
for (let i = 0; i < Object.keys(ClothingColors).length; i++) {
    if (output) {
        output.innerHTML += `<button style="${Object.values(ClothingColors)[i]}>${Object.keys(ClothingColors) [i]}</button>`;
    }
}

