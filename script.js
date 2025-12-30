let sec = 0;
let interval;

const display = document.getElementById("display");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const clearBtn = document.getElementById("clear");

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (secs < 10) secs = "0" + secs;

    return hours + ":" + minutes + ":" + secs;
}

startBtn.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(() => {
            sec++;
            display.textContent = formatTime(sec);
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

clearBtn.addEventListener("click", () => {
    sec = 0;
    display.textContent = "00:00:00";
    clearInterval(interval);
    interval = null;
});