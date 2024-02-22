const gridElement = document.getElementById('grid');
const gridSize = 20;
let grid = [];

function createCell(color) {
    const cell = document.createElement('div');
    cell.classList.add('cell', color);
    return cell;
}

function initialize() {
    gridElement.innerHTML = ''; // Clear the grid
    grid = [];
    const redPayoff = parseFloat(document.getElementById('redPayoff').value);
    const greenPayoff = parseFloat(document.getElementById('greenPayoff').value);
    const initialRedRatio = parseFloat(document.getElementById('initialRedRatio').value) / 100;

    for (let i = 0; i < gridSize; i++) {
        const row = [];
        for (let j = 0; j < gridSize; j++) {
            const isRed = Math.random() < initialRedRatio;
            const cell = createCell(isRed ? 'red' : 'green');
            gridElement.appendChild(cell);
            row.push({ element: cell, isRed: isRed, redPayoff: redPayoff, greenPayoff: greenPayoff });
        }
        grid.push(row);
    }
}

function nextGeneration() {
    grid.forEach((row, i) => {
        row.forEach((cell, j) => {
            // Simple rule: if the red payoff is higher, turn the cell red, otherwise green
            if (cell.redPayoff > cell.greenPayoff) {
                cell.isRed = true;
                cell.element.classList.add('red');
                cell.element.classList.remove('green');
            } else if (cell.redPayoff < cell.greenPayoff) {
                cell.isRed = false;
                cell.element.classList.add('green');
                cell.element.classList.remove('red');
            }
            // You can add more complex logic here for interaction with neighbors
        });
    });
}

// Initialize with default values on load
initialize();
