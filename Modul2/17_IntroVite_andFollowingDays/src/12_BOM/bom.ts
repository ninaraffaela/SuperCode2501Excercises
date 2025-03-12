console.log("%c ===== BOOOOM =====", "background-color: teal");
// the browser object model is a interface, offered by the browser. it enables JS/TS to interact with the browserwindow
// window object
console.log(window);


// ! window.screen = Properties of the used display
console.log("Current Display Height in px:", window.screen.availHeight);
console.log("Current Display Width in px:", window.screen.availWidth);

//! browserwindow
console.log("Inner height of the browserwindow", window.innerHeight);
console.log("Inner width of the browserwindow", window.innerWidth);


// ! Resize Event - when size of window changes
window.addEventListener("resize", () => {
    console.log("windowsize was changed");
    console.log(`current size ${window.innerWidth} x ${window.innerHeight}`);
});

// ! window.location - information on the current URL
console.log("whole URL:", window.location.href);
console.log("Port:", window.location.port);

// ! window.history - course of paage impressions
console.log("lenght of history:", window.history.length);


//! click back
document.getElementById("back-btn")?.addEventListener("click", () => {
    window.history.back();
})

// ! click forward
document.getElementById("forward-btn")?.addEventListener("click", () => {
    window.history.forward();
})

// !load page new
document.getElementById("refresh-btn")?.addEventListener("click", () => {
    window.location.reload();
})

// ! open new window
document.getElementById("open-btn")?.addEventListener("click", () => {
    window.open("https://catfact.ninja/", "_self");
    // window.open("https://catfact.ninja/", "_blank");
})

// ! window.navigator - check browser in use
console.log("BrowserInfo:", window.navigator.userAgent);

if (window.navigator.userAgent.includes("Chrome")) {
    console.log("Best choice of browser");

} else {
    console.log("brother eeew");
}

// ! get language
console.log("current language:", window.navigator.language);


// ! is the browser online
// boolean
console.log("Online??", window.navigator.onLine);


// ! Dialoges - not state of the art anymore.
// window.alert("Attention");
// window.prompt("how old are you?");
// window.confirm("please confirm")




