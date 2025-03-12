console.log("%c ===== localStorage & Cookies =====", "background-color: teal");
// ! Cookies
// - session administration
// - preferences
// - tracking

if (window.navigator.cookieEnabled) {
    console.log("cookies active");
    
}

//! set a cookie
document.cookie = "preferredLang=de-DE";
document.cookie = "preferredTheme=dark";


//! get cookies
const cookies = document.cookie;
console.log(cookies);

const cookieArr = cookies.split(";");
console.log(cookieArr);

const preferredThemeValue = cookieArr[1].split("=")[1];
console.log(preferredThemeValue);


//! LOCAL STORAGE
// element of BOM. internal storage for the url, in the browser.
// - write in localStorage
const languageSettings = { language: "German", subtitles: "English"};
const settingsAsJSONString = JSON.stringify(languageSettings);

// console.log(settingsAsJSONString);
localStorage.setItem("LanguageSetting", settingsAsJSONString);


// - read from localStorage
const settingsFromLocalStorage = localStorage.getItem("LanguageSetting");
console.log(settingsFromLocalStorage);
if (settingsFromLocalStorage){
    const realLanguageSettingsObject = JSON.parse(settingsFromLocalStorage);
    console.log(realLanguageSettingsObject.language);   
}


//! SESSION STORAGE



// ! SHOPPING CART EXAMPLES
const cart: string[] = [];

function addToCart(product: string) {
    cart.push (product)
    localStorage.setItem("cart", JSON.stringify(cart));
}

addToCart("Pizza");
addToCart("Orchids");

function renderCart() {
    const cartFromLocalStorage = localStorage.getItem("cart");
    console.log(cartFromLocalStorage);
    if (cartFromLocalStorage) {
        const cartArray = JSON.parse(cartFromLocalStorage);
        console.log(cartArray);
        const cartElement = document.createElement("div")
        cartElement.innerText = cartArray.join(", ")
        document.body.appendChild(cartElement)
    }
    
}

renderCart();