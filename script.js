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
