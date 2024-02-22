const gridElement = document.getElementById('grid');
const payoffMatrixElement = document.getElementById('payoffMatrix');
const matrixSizeElement = document.getElementById('matrixSize');
const gridSize = 20;
let grid = [];
let payoffMatrix = [];

function createMatrixInputs() {
    const size = matrixSizeElement.value;
    payoffMatrixElement.innerHTML = ''; // Clear the previous matrix

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `payoff-${i}-${j}`;
            input.placeholder = `S${i+1},S${j+1}`;
            row.appendChild(input);
        }
        payoffMatrixElement.appendChild(row);
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

function initialize() {
    gridElement.innerHTML = ''; // Clear the grid
    grid = [];
    payoffMatrix = getPayoffMatrix();
    // Initialize the grid with some logic based on payoffMatrix
    // ...
}

function nextGeneration() {
    // Logic to simulate the next generation based on payoffMatrix
    // ...
}

// Create the initial 2x2 matrix inputs on load
createMatrixInputs();
