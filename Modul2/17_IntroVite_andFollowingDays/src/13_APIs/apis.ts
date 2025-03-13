// ! APIs
// ProgrammInterface
// Kommunication between 2 SoftwareSystems
// eg. connection Frontend- Backend, or WeatherData, random cat facts
// most APIs are REST-APIs (Representational State Transfer)
// REST = style of architecture
// REST enables the transfer of date through the internet, with HTTP or HTTPS Protocols

// ! Request, Respnse
// Request: what do i want?
// Response: what do i have?

// Request und Response are usually in the JSON Format
// JSON (Javascript Object Notation)
// every dataset is in curly braces. keyValue-Pairs are separated with comma,

// ! fetch
// fetch - gives back a promise (for the data of the interface)

console.log(fetch("https://catfact.ninja/facts"));

// ! .then()
// method when promise is resolved
// gets a function, that includes the value of the Promise

// ! .catch()
// method when promise is rejected
// gets a function, that includes the value of the error

// ! RANDOM CAT FACTS API into console
type Fact = {
  fact: string;
  length: number;
};

// fetch("https://catfact.ninja/facts").then((response) => response.json()).then((dataPizza) => {
//     console.log(dataPizza);
//     const dataArray = dataPizza.data;
//     dataArray.forEach((singleFact: Fact) => {
//         console.log(singleFact.fact);

//     })

// }).catch((error) => console.log(error));

// ! RANDOM CAT FACTS - put the facts into a list element
// const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

// fetch("https://catfact.ninja/facts")
//   .then((response) => response.json())
//   .then((dataPizzaFunghi) => {
//     const dataArryFunghi = dataPizzaFunghi.data;
//     dataArryFunghi.forEach((singleFact: Fact) => {
//       if (output) {
//         output.innerText += `<li style="margin-bottom: 20px">${singleFact.fact}</li>`;
//         output.style.marginBottom = "20px";
//       }
//     });
//   });

// ! RANDOM CAT FACTS - with multiple pages
const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

let backwardLink = "https://catfact.ninja/facts?page=34";
let forwardLink = "https://catfact.ninja/facts?page=2";

// create back button
const backBtn = document.createElement("button");
backBtn.textContent = "Go back";
backBtn.addEventListener("click", () => fetchCatFacts(backwardLink));
document.body.appendChild(backBtn);

// create forward button
const forwardBtn = document.createElement("button");
forwardBtn.textContent = "Go forward";
forwardBtn.addEventListener("click", () => fetchCatFacts(forwardLink));
document.body.appendChild(forwardBtn);

function fetchCatFacts(url: string) {
  console.log("diese URL wird angezapft:", url);

  fetch(url)
    .then((response) => response.json())
    .then((dataPizzaFunghi) => {
      if (output) {
        output.innerText = "";
      }
      const dataArryFunghi = dataPizzaFunghi.data;
      dataArryFunghi.forEach((singleFact: Fact) => {
        if (output) {
          const listItem = document.createElement("li");
          listItem.innerText = singleFact.fact;
          output.appendChild(listItem);
        }
      });
      forwardLink = dataPizzaFunghi.next_page_url;
      backwardLink = dataPizzaFunghi.prev_page_url;
    }).catch((err) => console.log(err));
}

fetchCatFacts("https://catfact.ninja/facts?page=1");
