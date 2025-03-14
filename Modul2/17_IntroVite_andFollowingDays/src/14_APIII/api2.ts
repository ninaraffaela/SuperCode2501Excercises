// !  APIs

// * URL structure
// https://swapi.dev/api/planets/?page=3
// ⬆ Protokoll:  https
//          ⬆ Hostname/Domain
//                  ⬆Path to the resource
//                              ⬆Query Parameter

// *Query Parameter structure
// start with ?
// "name of parameter = value of parameter"
// you can combine parameters with &
// // in yaak or other api clients you can insert parameters

// * Path Parameter
// get resources directly (unique id eg.)
// directly after the /
// or with : and variable name (/:id)

//! HTTP Status Codes
const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

type Fact = {
  fact: string;
  length: number;
};

// - use wrong url and get the response.status (does not work without chrome-cors-extension)
// fetch("https://catfact.ninja/factsss")
//   .then((response) => {
//     if (response.status >= 200 && response.status < 300) {
//       return response.json();
//     } else {
//       throw new Error("Error: invalid http-statuscode: " + response.status);
//     }
//   })
//   .then((dataPizzaFunghi) => {
//     console.log(dataPizzaFunghi);
//     const dataArryFunghi = dataPizzaFunghi.data;
//     dataArryFunghi.forEach((singleFact: Fact) => {
//       if (output) {
//         output.innerHTML += `<li style="margin-bottom: 20px">${singleFact.fact}</li>`;
//         output.style.marginBottom = "20px";
//       }
//     });
//   })
//   .catch((err) => console.log(err));


//! Authorization & Authentication
//* What's the difference between authorization and authentication?
//-Authentication - verifying the true identity of a user or entity
//- Authorization - determines what a user can access and ensures that a user or entity receives the right access or permissions in a system.


// ! OpenWeather API
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 

