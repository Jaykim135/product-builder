const drawButton = document.getElementById('draw-button');
const ballElements = document.querySelectorAll('.ball');
const themeToggle = document.getElementById('checkbox');

// Function to set the theme
function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
    themeToggle.checked = (savedTheme === 'dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    setTheme('dark');
    themeToggle.checked = true;
} else {
    setTheme('light');
    themeToggle.checked = false;
}

// Event listener for theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});


drawButton.addEventListener('click', () => {
    const whiteBalls = [];
    while (whiteBalls.length < 5) {
        const randomNum = Math.floor(Math.random() * 69) + 1;
        if (!whiteBalls.includes(randomNum)) {
            whiteBalls.push(randomNum);
        }
    }

    const powerball = Math.floor(Math.random() * 26) + 1;

    ballElements.forEach((ball, index) => {
        if (index < 5) {
            ball.textContent = whiteBalls[index];
        } else {
            ball.textContent = powerball;
        }
    });
});