// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check localStorage for saved theme
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    // Update the button icon based on theme
    themeToggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
} else {
    // Set default theme to light if nothing is saved
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleButton.textContent = '🌙'; // Light theme icon
}

// Add event listener for theme toggle button
themeToggleButton.addEventListener('click', () => {
    // Get the current theme
    const theme = document.documentElement.getAttribute('data-theme');
    
    // Toggle between light and dark themes
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleButton.textContent = '☀️'; // Dark theme icon
        localStorage.setItem('theme', 'dark'); // Save theme to localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleButton.textContent = '🌙'; // Light theme icon
        localStorage.setItem('theme', 'light'); // Save theme to localStorage
    }
});
