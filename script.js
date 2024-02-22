function createMatrixInputs() {
    var matrixSize = document.getElementById('matrixSize').value;
    var matrixInputs = document.getElementById('matrix-inputs');
    matrixInputs.innerHTML = '';
    for (var i = 0; i < matrixSize; i++) {
        for (var j = 0; j < matrixSize; j++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = i + ',' + j;
            matrixInputs.appendChild(input);
        }
        matrixInputs.appendChild(document.createElement('br'));
    }
}

function updateRatioDisplay(value) {
    document.getElementById('ratio-value').textContent = value;
}

function initializeGrid() {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';

    let greenRatio = parseFloat(document.getElementById('green-ratio').value);
    let gridSize = 20;

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
    // Placeholder for the function to implement
}

// Initialize matrix inputs on load
window.onload = function() {
    createMatrixInputs();
    initializeGrid();
};
