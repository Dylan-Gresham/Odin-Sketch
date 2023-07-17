// Get HTML defined elements
const bodyTag = document.querySelector('body');
const container = document.querySelector('.container');
const changeBtn = document.querySelector('button');
const nextColorDiv = document.querySelector('.next-color');

// Initialize variables
let NUM_ROWS_COLS = 16;
let gridSize = 900 / NUM_ROWS_COLS;
let colorArray = ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(255, 0, 255)'];
let nextColor = newColor(0, 0, 0);

// Draw initial 16x16 grid
for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
    let newRowDiv = document.createElement('div'); // New row (div element)
    newRowDiv.classList.add('row'); // Add style

    for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
        let newBox = document.createElement('div'); // New box
        newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
        newBox.classList.add('grid-box');
        newRowDiv.appendChild(newBox); // Add to row
    }

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
        let newRowDiv = document.createElement('div'); // New row (div element)
        newRowDiv.classList.add('row'); // Add style
    
        for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
            let newBox = document.createElement('div'); // New box
            newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
            newBox.classList.add('grid-box');
            newRowDiv.appendChild(newBox); // Add to row
        }
    
        container.appendChild(newRowDiv); // Add whole row to container
    }

    container.addEventListener('mouseover', e => {
        if(e.target.className !== 'grid-box') {
            return;
        }
        
        e.target.style['background-color'] = nextColor[0];
        nextColor = newColor(nextColor[1], nextColor[2], nextColor[3]);
    });

    e.stopPropagation();
});

function newColor(prevR, prevG, prevB) {
    let newR = Math.floor(Math.random() * 256);
    let newG = Math.floor(Math.random() * 256);
    let newB = Math.floor(Math.random() * 256);

    while(newR === prevR) {
        newR = Math.floor(Math.random() * 256);
    }

    while(newG === prevG) {
        newG = Math.floor(Math.random() * 256);
    }

    while(newB === prevB) {
        newB = Math.floor(Math.random() * 256);
    }

    let str = `rgb(${newR}, ${newG}, ${newB})`;

    nextColorDiv.style['background-color'] = str;

    return [str, newR, newG, newB];
}

container.addEventListener('mouseover', e => {
    if(e.target.className !== 'grid-box') {
        return;
    }
    
    e.target.style['background-color'] = nextColor[0];
    nextColor = newColor(nextColor[1], nextColor[2], nextColor[3]);
});