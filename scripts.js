const counterDisplay = document.getElementById("counter")
const decreaseButton = document.getElementById("decrease")
const increaseButton = document.getElementById("increase")
const resetButton = document.getElementById("reset")


let counter = 0;

decreaseButton.addEventListener("click",
    () => {
        counter --;
        counterDisplay.textContent = counter
    }
)

increaseButton.addEventListener("click",
    () => {
        counter ++;
        counterDisplay.textContent = counter
        
    }
)

resetButton.addEventListener("click",
    () => {
        counter = 0;
        counterDisplay.textContent = counter

    }
)