const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cpsDisplay");
const grandmaBtn = document.getElementById("grandma-btn");
// get from local storage...or start from 0...
// get upgrade from api... 

let cookies = Number(localStorage.getItem("cookies")) || 0;
let cps = 0;

setInterval(function () {
    increment()
}, 1000);
//add local storage... 

function increment(){
    cookies = cookies + 1;
    // update local storage
    localStorage.setItem("cookies", cookies);
    cookieDisplay.textContent = cookies;


}

cookieBtn.addEventListener("click", function () {
    increment()
});
//change the button.. add text... reorganize the page...change from cookie
grandmaBtn.addEventListener("click", function (){
    if (cookies >= 10) {
        cps = cps + 1;
        cookies = cookies - 10;
        // update local storage
        localStorage.setItem("cookies", cookies);
        cookieDisplay.textContent = cookies;
        cpsDisplay.textContent = cps;
    }
});