document.documentElement.classList.add('js-enabled'); // Indicate JS is enabled

const themeToggle = document.createElement("button");
themeToggle.id = "theme-toggle";
document.body.appendChild(themeToggle);

function updateThemeIcon() {
    themeToggle.textContent = document.body.getAttribute("data-theme") === "dark" ? "🌙" : "☀️";
}

// Load saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
}
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon();
});