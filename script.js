document.addEventListener('DOMContentLoaded', function () {
    // Function to display current time
    function displayTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const timeDisplay = document.getElementById('time-display');
        timeDisplay.textContent = 'Current time: ' + timeString;
    }
    // Toggle time button event listener
    const toggleTimeButtons = document.querySelectorAll('.toggle-time');
    toggleTimeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const timeDisplay = this.nextElementSibling;
            if (timeDisplay.style.display === 'none') {
                displayTime();
                timeDisplay.style.display = 'block';
            } else {
                timeDisplay.style.display = 'none';
            }
        });
    });
    // Contact form event listener
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(this);
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        });
    });
});
