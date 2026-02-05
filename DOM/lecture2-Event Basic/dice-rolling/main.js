
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll");
    const tryAgainButton = document.getElementById("try-again");
    const answer = document.getElementById("answer");
    const dice = document.querySelector(".dice");

    function toggleVisibility() {
        tryAgainButton.classList.toggle("hidden")
    }

    rollButton.addEventListener("click", function () {
        if (!answer.value) {
            alert("You need to specify a value")

        } else {
            const randomNumber = getRandomNumber();
            dice.textContent = randomNumber;
            if (randomNumber === answer.valueAsNumber) {
                alert("You won");
            } else {
                toggleVisibility();
            }
        }
    })

    tryAgainButton.addEventListener("click", function () {
        dice.textContent = "";
        answer.value = ""
        toggleVisibility();
    })

})