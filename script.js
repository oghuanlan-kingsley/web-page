// Get the current date and time and update the "current-time" and "current-day" elements
function updateDateTime() {
    const currentTimeElement = document.getElementById('currentUTCTime');
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    const timeString = now.toISOString().split('T')[1].slice(0, 8); // Format the time as a string
    const dayString = now.toLocaleDateString(undefined, { weekday: 'long' }); // Get the full day name

    currentTimeElement.textContent = `Current Time: ${timeString}`;
    currentDayElement.textContent = `Current Day: ${dayString}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
