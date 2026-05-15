const container = document.getElementById("main-container");
const button = document.getElementById("resize-button");
const clearBtn = document.getElementById("clearBtn");

let mouseDown = false;

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        square.addEventListener("mousedown", () => {

            let opacity = Number(square.dataset.opacity) || 0;

            opacity += 0.1;

            if (opacity > 1) opacity = 1;

            square.dataset.opacity = opacity;

            if (!square.dataset.r) {
                square.dataset.r = Math.floor(Math.random() * 256);
                square.dataset.g = Math.floor(Math.random() * 256);
                square.dataset.b = Math.floor(Math.random() * 256);
            }

            const r = square.dataset.r;
            const g = square.dataset.g;
            const b = square.dataset.b;

            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        });

        square.addEventListener("mouseover", () => {
            if (!mouseDown) return;

            let opacity = Number(square.dataset.opacity) || 0;

            opacity += 0.1;

            if (opacity > 1) opacity = 1;

            square.dataset.opacity = opacity;

            if (!square.dataset.r) {
                square.dataset.r = Math.floor(Math.random() * 256);
                square.dataset.g = Math.floor(Math.random() * 256);
                square.dataset.b = Math.floor(Math.random() * 256);
            }

            const r = square.dataset.r;
            const g = square.dataset.g;
            const b = square.dataset.b;

            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
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

clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.dataset.opacity = 0;

        delete square.dataset.r;
        delete square.dataset.g;
        delete square.dataset.b;
    })
})

createGrid(16);