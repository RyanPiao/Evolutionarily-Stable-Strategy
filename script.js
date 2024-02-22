const matrixSizeElement = document.getElementById('matrixSize');
const matrixInputsContainer = document.getElementById('matrix-inputs');
const gridContainer = document.getElementById('grid');
const gridSize = 20;
let grid = [];

function createMatrixInputs() {
    const size = parseInt(matrixSizeElement.value, 10);
    matrixInputsContainer.innerHTML = ''; // Clear the previous matrix inputs

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `payoff-${i}-${j}`;
            input.placeholder = `S${i+1},S${j+1}`;
            rowDiv.appendChild(input);
        }
        matrixInputsContainer.appendChild(rowDiv);
    }
}

function initializeGrid() {
    gridContainer.innerHTML = ''; // Clear the grid
    grid = [];
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
            grid[i][j] = cell;
        }
    }
}

function initialize() {
    createMatrixInputs(); // Call this function to create the matrix inputs
    initializeGrid(); // Call this function to initialize the grid
}

function nextGeneration() {
    // Logic to simulate the next generation based on payoffMatrix
    // ...
}

// Initialize the matrix inputs and the grid when the page loads
window.onload = initialize;
