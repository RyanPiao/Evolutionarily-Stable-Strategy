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
document.getElementById('initialize').addEventListener('click', function() {
    var s1Value = document.getElementById('s1_profile').value.trim();
    var s2Value = document.getElementById('s2_profile').value.trim();
    var initialRatioS1 = parseFloat(document.getElementById('initial_ratio_s1').value);
    var initialRatioS2 = parseFloat(document.getElementById('initial_ratio_s2').value);

    // Check if ratios add up to 1
    if ((initialRatioS1 + initialRatioS2).toFixed(2) !== '1.00') {
        alert('The sum of the ratios must equal 1.');
        return;
    }

    // Now you can use s1Value, s2Value, initialRatioS1, and initialRatioS2 to initialize the matrix
    // For example, you might store these in a global state or pass them to a function
    console.log(s1Value, s2Value, initialRatioS1, initialRatioS2);

    // Further code to initialize the matrix goes here
});

// Initialize the matrix inputs and the grid when the page loads
window.onload = initialize;
