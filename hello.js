// Function to calculate the countdown
function updateCountdown() {
    const eventTime = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000); // Event starts in 2 days
    eventTime.setHours(8); // Set the hour to 8 AM PST, adjust for your timezone if needed
    eventTime.setMinutes(0);
    eventTime.setSeconds(0);

    const currentTime = new Date();
    const diff = eventTime - currentTime;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Run the countdown function when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    updateCountdown();
});
