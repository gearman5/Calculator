const screenDisplay = document.getElementById("screenDisplay");


function addToScreen(input) {
    screenDisplay.value += input;
}

function clearScreen() {
    screenDisplay.value = "";
}

function calculatePercentage() {
    let currentValue = parseFloat(screenDisplay.value);

    screenDisplay.value = currentValue * 0.01;
     
}

function Calculate() {
    try {
        screenDisplay.value = eval(screenDisplay.value);
    } catch (error) {
        screenDisplay.value = "Error"
    }
}


