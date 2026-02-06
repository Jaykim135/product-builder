const drawButton = document.getElementById('draw-button');
const ballElements = document.querySelectorAll('.ball');

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