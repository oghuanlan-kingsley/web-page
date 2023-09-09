// Function to update the current day of the week
function updateCurrentDayOfTheWeek() {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
        dayOfWeek;
}

// Function to update the current UTC time

function updateCurrentUTCTime() {
    const currentMillis = new Date().getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
        currentMillis;
}

// Initial update of real-time data
updateCurrentDayOfTheWeek();
updateCurrentUTCTime();

// Update real-time data every second
setInterval(function () {
    updateCurrentDayOfTheWeek();
    updateCurrentUTCTime();
}, 1000);