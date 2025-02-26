// ! Objects
console.log("%c 👾 Heute Objecte", "background-color: teal");

const movieTitle = "Dune";
const movieYear = 2021;
const movieDirector = "Denis Villeneuve";
const movieDescription = "Leute machen Sachen im Sand";
const movieActors = ["Timothee Chalamet", "Rebecca Ferguson"];
const movieRating = 4.8;
// these variables do not have a connection (other than, they belong to the movie)

// * an Object is a datestructure to join/connect different datetypes.

const duneMovie = {
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    description: "Leute machen Sachen im Sand",
    actors: ["Timothee Chalamet", "Rebecca Ferguson"],
    rating: 4.8
};

const jurassicParkMovie = {
    title: "Jurassic Park",
    year: 1993,
    director: "Steven Spielberg",
    description: "Rooooaaaaaaarrrr",
    actors: ["Jeff Goldblum"]
};


// ! TYPE OF OBJECT
type Movie = {
    title: string;
    year: number;
    director: string;
    description: string;
    actors: string[];
    rating?: number; // ? - this one is optional
};
// *types could be anything. objects, or numbers or strings or...
// type ISBN = number | string //? => union-tpye

const derPateMovie: Movie = {
    title: "Der Pate",
    year: 1972,
    director: "Francis Ford Coppola",
    description: "🔫",
    actors: ["Al Pacino", "Marlon Brando"],
    rating: 4.8,
    // genre: "Action", // not possible, genre is not defined in Movie
};

const movies: Movie[] = [duneMovie, jurassicParkMovie, derPateMovie];
console.log("our movies so far: ", movies);




// ! HOW TO ACCESS THE DATA OF THE OBJECT
console.log("%c ==== Access Objects ===", "Background-color: teal");
// -> nameOfObject.nameOfKey  with point notation

// * how would you get only jurassic park?
console.log(movies[1]);

// * how would you only get the actors?
console.log(movies[1].actors);

// * how would you get the rating of dune?
console.log(movies[0].rating);

// * how would you get the description of derPate?
console.log(movies[2].description);

// * could i get all the actors of movies, when i leave the square brackets blank?
// - no. movies is an array. 



// ! SORT AN OBJECT IN THE ARRAY MOVIE
// * how can i sort a number array ascending?
const numArr = [2, 45, 76.355, 54, 1];
numArr.sort((a, b) => a - b);
console.log(numArr);

// * how would i sort the movies after year ascending?
movies.sort((a, b) => a.year - b.year);
console.log("movies sorted after year ascending: ", movies);



// ! EDIT VALUE OF OBJECT
// * how do i change the title of a movie?
duneMovie.title = "Dune: Part One";
console.log("Dune changed title: ", duneMovie);

// * how would i change the year?
// duneMovie.year = "2022"; // not possible, as we defined year as type number
duneMovie.year = 2022;



// ! OBJECT.KEYS and OBJECT.VALUES
console.log("%c ==== keys and values ===", "Background-color: teal");

// * how would i get the names of all the keys of the object?
// - method Object.keys()   left side of :
console.log("Keys ⚿");
console.log(Object.keys(duneMovie));

// * how would i get the values of the objects?
// - method Object.values()   right side of :
console.log("Values 💁🏽");
console.log(Object.values(duneMovie));


// ! COPY OBJECTS
console.log("%c ==== copy objects ===", "Background-color: teal");
// - without copy: edits will affect the original versions, as you only use the place of the original
// - with copy: you don´t get the place of it, but the whole thing

const originalObject = {
    name: "Christian",
    age: 30,
    pokemonCards: ["Pikachu", "Glumanda"]
};

//* not really a copy, i only get the reference to the place of origin
const copiedObject = originalObject;
copiedObject.age = 31;
copiedObject.pokemonCards.push("Bisasam");
console.log("original", originalObject);
console.log("copied", copiedObject);


// * create a SHALLOW COPY with spread ... (but it´s not a deep one, that goes deep into the objects in objects)
const realCopiedObject = {...originalObject};
realCopiedObject.age = 32;
copiedObject.pokemonCards.push("togepi") //still goes into the original
console.log(originalObject);
console.log(realCopiedObject);


// * deep copy   - get´s the objects deep in the object aswell
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.pokemonCards.push("Tischbein");
console.log(deepCopy);


// * deep copy 2 -
const deepCopy2 = structuredClone(originalObject);
deepCopy2.pokemonCards.push("Elisian");
console.log(deepCopy2);






