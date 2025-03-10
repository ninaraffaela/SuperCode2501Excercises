// ! Modular Code

//!  import / export
// * NOW:  compiler Module - ESNext - 
// * THEN: it was CommonJS - Node.js ModuleSystem - compiler Module - CommonJS
// const importedModule = require("./test/example.js")

// ts config.json. compiler ESNext. EgmaScript.
// ESNext can export and import variables, Enums, Interfaces, Classes, Types, 

// ! Different Imports
//  everything from a modul/file
// import "./module.css";




// ! Named Export / Import
//- Variables from another file, can be used in this one, with the keyword "import"
import { DISCOUNT, calculatePrice, anotherVariable } from "./customer";
import { Customer } from "./models/types";

console.log(calculatePrice(199));

// see created fiiles shopitems.ts, types.ts,

const customer657: Customer = {
    id: 456765,
    name: "Mona",
    address: {
        street: "Hauptstr.1",
        postalCode: "D-83171",
        city: "somewhere south",
    },
};








// ! Import with alias
// - Import from other files with the keyword "as" and "[alias]"
// usefull when you import multiple sources with the same name.

import { calculatePrice as calculatePricePizza } from "./customer";

console.log(calculatePricePizza(250));



// ! Export with alias
import { printOddNumbers } from "./legacyCode";



// ! DEFAULT Export/ import
// - Keyword "export default" (see customerStates.ts)
// - you dont have to use curly brackets
import CustomerStatus from "./models/customerStates";

// - use an Alias directly, without the keyword "as"
import CustomerStatusWithABetterName from "./models/customerStates";
// UND
// or you could use a selfchosen name





// ! Import everything from a module
// - use wisely

import * as CustomerVariables from "./customer.ts";

console.log(CustomerVariables.anotherVariable);
console.log(CustomerVariables.calculatePrice(450));


// ! 2 types of imports
//* relative: data and files from within my project
//  using the paths "./" "../"

//* non-relative: external modules or bibliothecs,
// in node_modules
// don´t use the paths

// ! non-relative import - Library date-fns
import {format} from "date-fns";
// {function name of the library. can be imported with alias}

const today = new Date();
console.log(today);

console.log(format(today, "yyyy-MMMM-do")); // 2025-March-10th
console.log(format(today, "yyyy MMMM do")); // 2025-March-10th
console.log(format(today, "MMMM 'the' do 'in' yyyy")); // 2025-March-10th


// ! import of libraries without ts
// when the library does not come with types, typescript will through an error.
// try to use "npm i @types/LYBRARYNAME"


