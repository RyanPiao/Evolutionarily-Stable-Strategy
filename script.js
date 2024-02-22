// Assuming this is script.js
function createMatrixInputs() {
    // Function to create matrix inputs based on selected size
}

function updateRatioDisplay(value) {
    document.getElementById('ratio-value').textContent = value;
    initializeGrid(); // Call initializeGrid whenever the ratio is updated
}

function initializeGrid() {
    let grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear the grid first

    let greenRatio = parseFloat(document.getElementById('green-ratio').value);
    let gridSize = parseInt(document.getElementById('matrixSize').value);

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let gridBlock = document.createElement('div');
            gridBlock.className = 'grid-block';
            // Assuming green blocks are represented by 1 and red blocks by 0
            if (Math.random() < greenRatio) {
                gridBlock.classList.add('green');
            } else {
                gridBlock.classList.add('red');
            }
            grid.appendChild(gridBlock);
        }
    }
}

function nextGeneration() {
    // Function to process to the next generation based on current grid and inputs
}
