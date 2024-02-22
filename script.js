const gridElement = document.getElementById('grid');
const payoffMatrixElement = document.getElementById('payoffMatrix');
const matrixSizeElement = document.getElementById('matrixSize');
const gridSize = 20;
let grid = [];
let payoffMatrix = [];

function createMatrixInputs() {
    const size = parseInt(matrixSizeElement.value, 10);
    payoffMatrixElement.innerHTML = ''; // Clear the previous matrix

    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `payoff-${i}-${j}`;
            input.placeholder = `S${i+1},S${j+1}`;
            rowDiv.appendChild(input);
        }
        payoffMatrixElement.appendChild(rowDiv);
    }
}

function getPayoffMatrix() {
    const size = parseInt(matrixSizeElement.value, 10);
    const matrix = [];

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const value = parseFloat(document.getElementById(`payoff-${i}-${j}`).value);
            row.push(isNaN(value) ? 0 : value);
        }
        matrix.push(row);
    }

    return matrix;
}

function initializeGrid() {
    gridElement.innerHTML = ''; // Clear the grid
    grid = [];
    for (let i = 0; i < gridSize; i++) {
        const row = [];
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridElement.appendChild(cell);
            row.push(cell);
        }
        grid.push(row);
    }
}

function initialize() {
    payoffMatrix = getPayoffMatrix();
    initializeGrid();
}

function nextGeneration() {
    // Logic to simulate the next generation based on payoffMatrix
    // ...
}

// Create the initial 2x2 matrix inputs on load
createMatrixInputs();
initializeGrid();
