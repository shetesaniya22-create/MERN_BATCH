//setInterval overlaps
//If there is an ongoing interval and the task inside it
// setInterval does not wait for the previous execution to finish.
// If the task inside takes longer than the interval, executions pile up, causing overlap(the new interval would still start)




document.addEventListener("DOMContentLoaded", () => {
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let timeoutId = null; 

    startBtn.addEventListener("click", () => {
        if (timeoutId) return; 

        function tick() {
            
            seconds++;
            console.log(timeoutId);

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
    
            timeoutId = setTimeout(tick, 100);

        
        timeoutId = setTimeout(tick, 100);
        }

        tick();
    });

    stopBtn.addEventListener("click", () => {

        clearTimeout(timeoutId); 
        this.timeoutId =this.timeoutId;
        console.log("Stop watch at",timeoutId);
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
