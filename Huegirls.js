const mysteryText = document.getElementsByTagName('h1')[0];
const headerBackGround = document.getElementsByTagName('header')[0];

function textInjector() {
    mysteryText.innerText = "What is your skin type?";
}

let opacity = 0;
        let intervalID = 0;
        window.onload = fadeIn;
  
        function fadeIn() {
            setInterval(show, 100);
        }
  
        function show() {
            opacity = Number(window.getComputedStyle(headerBackGround)
                             .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.1;
                headerBackGround.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }

window.setTimeout(textInjector, 2500);
