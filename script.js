// Assuming this is script.js
function createMatrixInputs() {
    // Function to create matrix inputs based on selected size
}

function updateRatioDisplay(value) {
    document.getElementById('ratio-value').textContent = value;
    initializeGrid(); // Call initializeGrid whenever the ratio is updated
}

function initializeGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Clear the grid first
    const gridSize = 20; // Set grid size to 20x20

    for (let row = 0; row < gridSize; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'grid-row'; // You should define this class in your CSS

        for (let col = 0; col < gridSize; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'grid-cell'; // You should define this class in your CSS
            // Optionally set the initial color of the cell here, or add event listeners, etc.
            rowDiv.appendChild(cellDiv);
        }

        grid.appendChild(rowDiv);
    }
}


function nextGeneration() {
    // Function to process to the next generation based on current grid and inputs
}
