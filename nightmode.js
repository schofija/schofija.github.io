document.addEventListener('DOMContentLoaded', function () {
    // Select the night mode toggle element
    const nightModeToggle = document.getElementById('night-mode-toggle');

    // Define a key for storing the night mode preference in localStorage
    const nightModeKey = 'nightMode';

    // Function to toggle night mode
    function toggleNightMode() {
        isNightMode = !isNightMode; // Toggle the mode

        // Update the icon based on the mode
        nightModeToggle.innerHTML = isNightMode ? '<span class="sun-icon">&#9728;</span>' : '<span class="moon-icon">&#9790;</span>';

        // Update the page styles, e.g., change background color, text color, etc.
        document.body.classList.toggle('night-mode', isNightMode);

        // Toggle night mode for h2 elements
        const h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach(element => {
            element.classList.toggle('night-mode', isNightMode);
        });

        // Store the user's preference in localStorage
        localStorage.setItem(nightModeKey, isNightMode ? 'enabled' : 'disabled');

        console.log('Night mode toggle pressed. Night mode is now ' + (isNightMode ? 'enabled' : 'disabled'));
    }

    // Check if the user's preference is stored in localStorage
    const storedNightMode = localStorage.getItem(nightModeKey);

    // Initialize the icon and styles based on the user's preference or use a default
    let isNightMode = storedNightMode === 'enabled';

    // If there is no stored preference, use a default (e.g., night mode off)
    if (storedNightMode === null) {
        isNightMode = false;
    }

    // Apply the initial styles based on the user's preference
    document.body.classList.toggle('night-mode', isNightMode);

    // Toggle night mode for h2 elements
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(element => {
        element.classList.toggle('night-mode', isNightMode);
    });

    nightModeToggle.innerHTML = isNightMode ? '<span class="sun-icon">&#9728;</span>' : '<span class="moon-icon">&#9790;</span>';

    // Add a click event listener to toggle night mode
    nightModeToggle.addEventListener('click', toggleNightMode);

    console.log('Night mode is now ' + (isNightMode ? 'enabled' : 'disabled'));
});
