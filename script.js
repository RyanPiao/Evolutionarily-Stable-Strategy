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

function updateRatioDisplay(value) {
    document.getElementById('ratio-value').textContent = value;
    initializeGrid(); // Call initializeGrid whenever the ratio is updated
}

function initializeGrid() {
    let grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear the grid first

    let greenRatio = parseFloat(document.getElementById('green-ratio').value);
    let gridSize = 20; // Set gridSize to 20 for a 20x20 grid

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = 'grid-row';
        for (let j = 0; j < gridSize; j++) {
            let gridBlock = document.createElement('div');
            gridBlock.className = 'grid-block';
            if (Math.random() < greenRatio) {
                gridBlock.classList.add('green');
            } else {
                gridBlock.classList.add('red');
            }
            row.appendChild(gridBlock);
        }
        grid.appendChild(row);
    }
}


function nextGeneration() {
    // Function to process to the next generation based on current grid and inputs
}
