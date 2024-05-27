const screenDisplay = document.getElementById("screenDisplay");

function addToScreen(input) {
    screenDisplay.value += input;
}

function clearScreen() {
    screenDisplay.value = "";
}

function Calculate() {
    try {
        screenDisplay.value = eval(screenDisplay.value);
    } catch (error) {
        screenDisplay.value = "Error"
    }
}


