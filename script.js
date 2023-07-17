// Get HTML defined elements
const bodyTag = document.querySelector('body');
const container = document.querySelector('.container');
const changeBtn = document.querySelector('button');

// Initialize variables
let divArray = [];
let divRowArray = [];
let NUM_ROWS_COLS = 16;
let gridSize = 900 / NUM_ROWS_COLS;

// Draw inital 16x16 grid
for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
    divArray[i] = [];
    let newRowDiv = document.createElement('div'); // New row (div element)
    newRowDiv.classList.add('row'); // Add style

    for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
        let newBox = document.createElement('div'); // New box
        newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
        divArray[i][j] = newBox;
        newRowDiv.appendChild(newBox); // Add to row
    }

    divRowArray[i] = newRowDiv;
    container.appendChild(newRowDiv); // Add whole row to container
}

changeBtn.addEventListener('click', e => {
    // Get new dimensions
    let newGridDimensions = prompt('Enter the new size of your grid (<= 100):', 16);
    while(newGridDimensions > 100) {
        newGridDimensions = prompt('Try again. Enter the new size of your grid (<= 100):', 16);
    }
    
    // Remove all grid rows and leaves the top bar
    for(let i = 0; i < NUM_ROWS_COLS; i++) {
        container.removeChild(container.lastChild);
    }

    // Redraw grid
    NUM_ROWS_COLS = newGridDimensions;
    gridSize = 900 / NUM_ROWS_COLS;
    for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
        divArray[i] = [];
        let newRowDiv = document.createElement('div'); // New row (div element)
        newRowDiv.classList.add('row'); // Add style
    
        for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
            let newBox = document.createElement('div'); // New box
            newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
            divArray[i][j] = newBox;
            newRowDiv.appendChild(newBox); // Add to row
        }
    
        divRowArray[i] = newRowDiv;
        container.appendChild(newRowDiv); // Add whole row to container
    }

    e.stopPropagation();
});