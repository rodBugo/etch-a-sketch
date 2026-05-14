const container = document.getElementById("main-container");
const button = document.getElementById("resize-button");

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.classList.add("active")
        });

        container.appendChild(square);
    }
}

button.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (max 100):");

    userInput = Number(userInput);

    if (userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

createGrid(16);