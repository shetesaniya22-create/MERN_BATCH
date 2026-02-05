document.addEventListener("DOMContentLoaded", () => {
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let intervalId = null;

    startBtn.addEventListener("click", () => {
        if (intervalId) return;

        
        intervalId = setInterval(() => {
            console.log("Count is increasing");
        
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }


            updateDisplay();
        }, 1000);
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Stop watch");
        
    });

    function updateDisplay() {
        hoursEl.textContent = format(hours);
        minutesEl.textContent = format(minutes);
        secondsEl.textContent = format(seconds);
    }

    function format(num) {
        return num < 10 ? "0" + num : num;
    }
});
