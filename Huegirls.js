const mysteryText = document.getElementsByClassName("main-div")[1];

function textInjector() {
    mysteryText.innerText = "What is your skin type?";
}

document.addEventListener('mousemove', textInjector, false);